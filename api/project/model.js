const db = require("../../data/dbConfig.js");

module.exports = {

    find() {
        return db("projects");
    },

    create(project) {
        return db("projects")
            .insert(project)
            .then(([id]) => {
                return db("projects")
                    .where("project_id", id)
                    .first();
            });
    }

};