DROP TABLE IF EXISTS ingredients CASCADE;
DROP TABLE IF EXISTS recipes;

CREATE TABLE recipes(
    id SERIAL PRIMARY KEY,
    title TEXT UNIQUE NOT NULL,
    instructions TEXT NOT NULL,
    prep_time INTEGER NOT NULL
);

CREATE TABLE ingredients(
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    quantity INTEGER NOT NULL,
    recipe_id INTEGER NOT NULL,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE
);