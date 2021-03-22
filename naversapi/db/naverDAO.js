const db = require('./db');
const TYPES = require('tedious').TYPES;

const getAllNavers = (callback) => {
    db.queryDatabase(`SELECT id, name, birthdate, admission_date, job_role from navers order by created_at`,
        (result) => {
            callback(result);
        });
};


const getNaverDetail = (id, callback) => {
    db.queryDatabase(`
    SELECT n.id, n.name, n.birthdate, n.admission_date, n.job_role, project_id = p.id, project_name = p.name 
    from navers n 
    left join projects_navers pn on n.id = pn.naver_id
    left join projects p on p.id = pn.project_id
    where n.id = '${id}'`,
        (result) => {

            if (!result || result.length == 0) {
                callback({});
                return;
            }

            projects = [];

            for (let index = 0; index < result.length; index++) {
                const p = result[index];
                projects.push({id: p.project_id, name: p.project_name});                
            }

            finalResult = {
                id: result[0].id,
                name: result[0].name,
                birthdate: result[0].birthdate,
                admission_date: result[0].admission_date,
                job_role: result[0].job_role,
                projects: projects
            };

            callback(finalResult);
        });
};

const insertProjectToNaver = (naverId, projectId, callback) => {

    console.log('inserting project to the naver...');

    db.executeCommand(`
    INSERT INTO projects_navers (naver_id, project_id) 
    OUTPUT Inserted.ID
    VALUES (@naver_id, @project_id)`,
        (result) => {
            callback(result);
        }, [
        { name: 'naver_id', type: TYPES.UniqueIdentifier, value: naverId },
        { name: 'project_Id', type: TYPES.UniqueIdentifier, value: projectId }]);

};

const insertNaver = (name, birthdate, admission_date, job_role, projectIds, callback) => {

    console.log('inserting naver...');

    db.executeCommand(`
    INSERT INTO navers (name, birthdate, admission_date, job_role) 
    OUTPUT Inserted.ID
    VALUES (@name, @birthdate, @admission_date, @job_role)`,
        (result) => {

            if (projectIds && projectIds.length > 0) {
                count = 0;
                projectIds.forEach((pId) => {
                    console.log(pId);
                    insertProjectToNaver(result[0], pId, (subresult) => {
                        count++;
                        if (count == projectIds.length)
                            callback(result);
                    });
                });
            }
            else
                callback(result);

        }, [
        { name: 'name', type: TYPES.VarChar, value: name },
        { name: 'birthdate', type: TYPES.Date, value: birthdate },
        { name: 'admission_date', type: TYPES.Date, value: admission_date },
        { name: 'job_role', type: TYPES.VarChar, value: job_role }]);

};

module.exports = {
    getAllNavers,
    getNaverDetail,
    insertProjectToNaver,
    insertNaver
};