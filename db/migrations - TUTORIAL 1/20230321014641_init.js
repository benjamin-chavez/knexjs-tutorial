// npx knex migrate:make init --migrations-directory db/migrations

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable('person', (table) => {
    // FIXME: USE UUID HERE INSTEAD
    // TODO: ALWAYS USE SNAKECASE!
    table.increments('id');
    table.string('email').notNullable().unique();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.timestamps(true, true);
    // Also add who updated the record?
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('person');
};
