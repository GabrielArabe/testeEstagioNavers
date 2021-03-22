const { columns } = require("mssql");
const { Connection, Request } = require("tedious");

const config = {
    authentication: {
        options: {
            userName: "navers",
            password: "N@vers123"
        },
        type: "default"
    },
    server: "navers.database.windows.net",
    options: {
        database: "naversapi",
        encrypt: true
    }
};

const executeRequest = (request) => {

    const connection = new Connection(config);
   

    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('connected to the db successfully');
            request.on("requestCompleted", () => connection.close());
            connection.execSql(request);
        }
    });
};

function queryDatabase(query, callback) {
    console.log("Reading rows from the Table...");

    // Read all rows from table
    const request = new Request(
        query,
        (err, rowCount) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`${rowCount} row(s) returned`);
            }
        }
    );

    result = [];

    request.on("row", (columns) => {
        rowObject = {};
        columns.forEach(column => {
            rowObject[column.metadata.colName] = column.value;
        });
        result.push(rowObject);
    });

    const doneFunc = () => {
        callback(result);
    };

    request.on("done", doneFunc);
    request.on("doneProc", doneFunc);

    executeRequest(request);
}

function executeCommand(command, callback, parameters) {
    const request = new Request(
        command,
        (err, rowCount) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`row count: ${rowCount}.`);
            }
        }
    );

    if (parameters && parameters.length > 0) {
        parameters.forEach((p) => {
            request.addParameter(p.name, p.type, p.value);
        })
    };

    result = [];

    request.on("row", (columns) => {
        result.push(columns[0].value);
    });

    const doneFunc = () => {
        callback(result);
    };

    request.on("requestCompleted", doneFunc);

    executeRequest(request);
}

module.exports = {
    queryDatabase,
    executeCommand
};