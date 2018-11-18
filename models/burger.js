let orm = require("../config/orm.js");

module.exports = {
    all: function (callback) {
        orm.selectAll("burgers", callback);
    },

    add: function (callback) {
        orm.insertOne("burgers", burger_name, callback);
    },

    edit: function (callback) {
        orm.updateOne("burgers", burger_name, callback);
    }

}