const db = require("../../data/dbConfig.js");

module.exports = {

    find() {
        return db("tasks");
    },

    create(task) {
        return db("tasks")
            .insert(task)
            .then(([id]) => {
                return db("tasks")
                    .where("task_id", id)
                    .first();
            });
    }

};