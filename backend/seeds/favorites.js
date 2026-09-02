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
      title: "TMNT ",
      main_character: "The Turtles",
      year_released: "1987",
    },
    { id: 2, title: "Batman", main_character: "Batman", year_released: "1990" },
    {
      id: 3,
      title: "Deadpool",
      main_character: "Deadpool",
      year_released: "2015",
    },
  ]);
};
