module.exports = tbl => {
  tbl.increments("id");
  tbl.text("title").notNullable();
  tbl.text("img");
  tbl
    .integer("forked_from")
    .references("id")
    .inTable("recipes")
    .onUpdate("CASCADE")
    .onDelete("SET NULL");
  tbl
    .integer("owner_id")
    .notNullable()
    .references("id")
    .inTable("users")
    .onUpdate("CASCADE")
    .onDelete("CASCADE");
  tbl.integer("prep_time");
  tbl.integer("cook_time");
  tbl.text("description");
  tbl.timestamps(true, true);
  tbl.text("author_comment");
};
