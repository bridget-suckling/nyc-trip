/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('activities').del()
  await knex('activities').insert([
    {
      id: 1,
      name: 'Met Museum',
      type: 'Museum or gallery',
      location_id: '2',
      time: 'Anytime',
      trainline: '',
      cost: '$30',
      url: 'https://www.metmuseum.org/',
      comments: '',
    },
  ])
}
