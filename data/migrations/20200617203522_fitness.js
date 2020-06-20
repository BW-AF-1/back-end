
exports.up = function (knex) {
    return knex.schema.createTable('clients', (tbl) => {
        tbl.increments()
        tbl.text('username').notNullable().unique()
        tbl.text('password').notNullable()
    })
        .createTable('instructors', (tbl) => {
            tbl.increments()
            tbl.text('username').notNullable().unique()
            tbl.text('password').notNullable()
        })
        .createTable('classes', (tbl) => {
            tbl.increments()
            tbl.text('name').notNullable().unique()
            tbl.text('type').notNullable()
            tbl.datetime('startTime').notNullable()
            tbl.time('duration').notNullable().unsigned()
            tbl.integer('intensityLevel').notNullable()
            tbl.text('location').notNullable()
            tbl.integer('attendees').notNullable()
            tbl.integer('maxClassSize').notNullable().unsigned()
            tbl.integer('instructor_id').references('id').inTable('instructors').notNullable().unsigned()
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
        })
        .createTable('clients_classes', (tbl) => {
            tbl.integer('class_id').notNullable().unsigned().references('id').inTable('classes')
            tbl.integer('client_id').notNullable().unsigned().references('id').inTable('clients')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            tbl.primary(['class_id', 'client_id'])
        })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExist('clients_classes')
        .dropTableIfExist('classes')
        .dropTableIfExist('instructors')
        .dropTableIfExist('clients')
};
