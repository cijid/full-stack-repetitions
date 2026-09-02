/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("favorites", (table) => {
    table.increments("id").primary();
    table.string("title", 200);
    table.string("main_character", 200);
    table.integer("year_released");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("favorites");
};
