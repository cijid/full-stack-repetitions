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
      title: "The Matrix",
      main_character: "Neo",
      year_released: "1999",
    },
    { id: 2, title: "Batman", main_character: "Batman", year_released: "1990" },
    { id: 3, title: "It", main_character: "Pennywise", year_released: "2022" },
  ]);
};
