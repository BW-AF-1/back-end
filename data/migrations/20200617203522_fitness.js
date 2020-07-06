
exports.up = function (knex) {
    return knex.schema.createTable('clients', (tbl) => {
        tbl.increments()
        tbl.text('username').notNullable()
        tbl.text('password').notNullable()
    })
        .createTable('instructors', (tbl) => {
            tbl.increments()
            tbl.text('username').notNullable()
            tbl.text('password').notNullable()
        })
        .createTable('classes', (tbl) => {
            tbl.increments()
            tbl.text('name').notNullable()
            tbl.text('type').notNullable()
            tbl.text('startTime').notNullable()
            tbl.text('duration').notNullable().unsigned()
            tbl.text('intensityLevel').notNullable()
            tbl.text('location').notNullable()
            tbl.integer('attendees').notNullable()
            tbl.integer('maxClassSize').notNullable().unsigned()
            tbl.integer('instructor_id').unsigned().notNullable().references('id').inTable('instructors')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
        })
        .createTable('clients_classes', (tbl) => {
            tbl.integer('class_id').notNullable().unsigned().references('id').inTable('classes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
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
