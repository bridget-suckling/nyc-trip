/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('locations', (table) => {
    table.increments('id')
    table.string('name')
    table.string('code')
    table.string('neighbours')
    table.string('trainline')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('locations')
}
