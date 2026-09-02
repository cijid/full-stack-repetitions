/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("favorites").del();
  await knex("favorites").insert([
    {
      id: 1,
      title: "Odyssey",
      main_character: "Odysseus",
      year_released: 2026,
    },
    {
      id: 2,
      title: "Super Mario Brothers",
      main_character: "Mario",
      year_released: 2024,
    },
    {
      id: 3,
      title: "Pokemon the Movie 2000",
      main_character: "Ash Ketchum",
      year_released: 2000,
    },
  ]);
};
