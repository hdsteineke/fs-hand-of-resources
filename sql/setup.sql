-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS dogs CASCADE;

CREATE TABLE dogs (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR,
  age INT,
  color VARCHAR,
  does_tricks BOOLEAN
);


INSERT INTO dogs (
  name,
  age,
  color,
  does_tricks
)

VALUES
('Spot', 4, 'spotted', true),
('Bindi', 8, 'black', false),
('Annie', 1, 'white', true),
('Wizard', 5, 'spotted', true),
('Spence', 9, 'white and brown', false)
;