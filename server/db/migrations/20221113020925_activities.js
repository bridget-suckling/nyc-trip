/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('activities', (table) => {
    table.increments('id')
    table.string('name')
    table.string('type')
    table.integer('location_id')
    table.string('time')
    table.string('trainline')
    table.string('cost')
    table.string('url')
    table.string('comments')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('activities')
}
