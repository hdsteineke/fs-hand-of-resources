-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS dogs CASCADE;
DROP TABLE IF EXISTS snacks CASCADE;
DROP TABLE IF EXISTS hobbies CASCADE;
DROP TABLE IF EXISTS flowers CASCADE;
DROP TABLE IF EXISTS planets CASCADE;

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


CREATE TABLE flowers (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  common_name VARCHAR,
  color VARCHAR,
  num_petals INT
);

INSERT INTO flowers (
  common_name,
  color,
  num_petals
)

VALUES 
('checker bloom', 'pink', 5),
('spring madia', 'gold, red, brown', 30),
('fawn lily', 'pale yellow', 6),
('columbine', 'pink, red, yellow,  purple', 5),
('cornflower', 'blue, pink, purple, white', 16)
;

CREATE TABLE planets (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR,
  radius_miles INT
);

INSERT INTO planets (
  name,
  radius_miles
)

VALUES
('Sun', 432690),
('Mercury', 1516),
('Venus', 3760),
('Earth', 3959),
('Mars', 2106),
('Jupiter', 43441),
('Saturn', 36184),
('Uranus', 15759),
('Neptune', 15299),
('Pluto', 738);