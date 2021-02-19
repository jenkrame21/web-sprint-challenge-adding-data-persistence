// build your `Project` model here
const db = require("../../data/dbConfig.js");

// - [ ] `[POST] /api/projects`
//  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//  - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

// - [ ] `[GET] /api/projects`
//  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//  - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`

module.exports = {

    find() {
        return db("projects");
    },

    findById(id) {
        return db("projects")
            .where("id", id)
            .first();
    },

    create(project) {
        
    }
};