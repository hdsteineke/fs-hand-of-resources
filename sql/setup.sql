-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS dogs CASCADE;
DROP TABLE IF EXISTS snacks CASCADE;
DROP TABLE IF EXISTS hobbies CASCADE;

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

CREATE TABLE snacks (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  type VARCHAR,
  is_chocolate BOOLEAN
);

INSERT INTO snacks (
  type,
  is_chocolate
)

VALUES
('Butterfinger', true),
('Chex Mix', false),
('Twizzlers', false);

CREATE TABLE hobbies (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  hobby VARCHAR,
  since INT,
  is_active BOOLEAN
);

INSERT INTO hobbies (
  hobby,
  since,
  is_active
)

VALUES
('writing', 2000, false),
('astrology', 2015, false),
('tarot', 2016, false),
('dancing', 2007, true),
('ukulele', 2021, false);