const connection = require("./connection.js");

let orm = {
    selectAll: (table, callback) =>{
        const q = "SELECT * FROM ??";
        connection.query(q, [table], callback);
    },

    insertOne: (table, object, callback)=>{
        const q = "INSERT INTO ?? SET ?";
        connection.query(q, [table, object], callback);
    },

    updateOne: (table, object, callback)=>{
        const q = "UPDATE ?? SET ? WHERE id = ?";
        connection.query(q, [table, object, object.id], callback);
    }
}

module.exports= orm;