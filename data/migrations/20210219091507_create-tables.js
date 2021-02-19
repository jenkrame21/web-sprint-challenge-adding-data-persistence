
exports.up = function(knex) {
    return knex.schema
        .createTable("projects", table => {
            table.increments("project_id");
            table.text("project_name", 128)
                .notNullable();
            table.text("project_description");
            table.boolean("project_completed")
                .notNullable();
        })
        .createTable("resources_projects", table => {
            table.increments("resource_project_id");
            table.integer("project_id")
                .unsigned()
                .notNullable()
                .references("project_id")
                .inTable("projects")
                .onDelete("RESTRICT");
            table.integer("resource_id")
                .unsigned()
                .notNullable()
                .references("resource_id")
                .inTable("resources")
                .onDelete("RESTRICT");
        })
        .createTable("resources", table => {
            table.increments("resource_id");
            table.text("resource_name", 128)
                .unique()
                .notNullable();
            table.text("resource_description");
        })
        .createTable("tasks", table => {
            table.increments("task_id");
            table.text("task_description", 128)
                .notNullable();
            table.text("task_notes");
            table.boolean("task_completed")
                .notNullable();
            table.integer("project_id")
                .unsigned()
                .notNullable()
                .references("project_id")
                .inTable("projects")
                .onDelete("RESTRICT");
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("tasks")
        .dropTableIfExists("resources")
        .dropTableIfExists("resources_projects")
        .dropTableIfExists("projects");
};
