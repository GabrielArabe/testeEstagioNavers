const db = require('./db');
const naverDAO = require('./naverDAO');
const TYPES = require('tedious').TYPES;

const getAllProjects = (callback) => {
    db.queryDatabase(`SELECT id, name from projects order by created_at`,
        (result) => {
            callback(result);
        });
};


const getProjectDetail = (id, callback) => {
    db.queryDatabase(`
    SELECT p.id, p.name, naver_id = n.id, naver_name= n.name, naver_birthdate = n.birthdate, naver_admission_date= n.admission_date, naver_job_role = n.job_role 
    from projects p 
    left join projects_navers pn on p.id = pn.project_id
    left join navers n on n.id = pn.naver_id
    where p.id = '${id}'`,
        (result) => {

            if (!result || result.length == 0) {
                callback({});
                return;
            }

            navers = [];

            for (let index = 0; index < result.length; index++) {
                const n = result[index];
                navers.push({id: n.naver_id, name: n.naver_name, birthdate: n.naver_birthdate, admission_date: n.naver_admission_date, job_role: n.naver_job_role});
            }


            finalResult = {
                id: result[0].id,
                name: result[0].name,
                navers: navers
            };

            callback(finalResult);
        });
};

const insertProject = (name, naverIds, callback) => {

    console.log('inserting project...');

    db.executeCommand(`
    INSERT INTO projects (name) 
    OUTPUT Inserted.ID
    VALUES (@name)`,
        (result) => {

            if (naverIds && naverIds.length > 0) {
                count = 0;
                naverIds.forEach((nId) => {
                    console.log(nId);
                    naverDAO.insertProjectToNaver(nId, result[0], (subresult) => {
                        count++;
                        if (count == naverIds.length)
                            callback(result);
                    });
                });
            }
            else
                callback(result);

        }, [
        { name: 'name', type: TYPES.VarChar, value: name }]);

};

module.exports = {
    getAllProjects,
    getProjectDetail,
    insertProject
};