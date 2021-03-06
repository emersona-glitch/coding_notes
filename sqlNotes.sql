create
--
CREATE TABLE "table_name"
(

  -- when we use serial, we don't have to even send this info along because
  -- it gets generated by postgres. Declaring this row as the primary key
  -- makes it so the database has a thing to refer to it...uh??
  "id_number" serial PRIMARY KEY,
  -- NOT NULL makes it so if this row isn't provided, then an error will
  -- occur, additionally, it needs to have a unique value or that's
  -- another error.
  "username" VARCHAR(128) NOT NULL UNIQUE,
  "auth_level" integer

);
-- don't forget the semicolon ;^)

-- read --
-- you don't even have to grab actual things from a database
SELECT 42;
-- you can do math
SELECT 2 + 2;
-- you can concatenate strings
SELECT 'I am' || ' a donkey';
-- dates...
SELECT DATE 'Mar 6, 1991';

-- do you need quotes around stuff? is it bad form if no?
SELECT *
FROM "dinka_doo";
-- or
SELECT "dinka_doo".*;

-- Ordering
SELECT "dinka_doo".name
ORDER BY date ASC
SELECT 'song'
FROM "dinka_doo"
ORDER BY date, time ASC

-- Limit (this will only give back 3 results, probably
-- referencing the primary key)
SELECT *
FROM "dingus" LIMIT
3;
-- skip some rows w/ offset
SELECT *
FROM "dingus" LIMIT
3 OFFSET 2;

-- conditions / WHERE
SELECT *
FROM "donkey"
WHERE id = 5;
-- multiple conditions
-- AND / OR
SELECT *
FROM "donkey"
WHERE id = 5 AND name = 'dingo';
SELECT *
FROM "donkey"
WHERE id = 5 OR auth_level > 10;
-- NOT
SELECT *
FROM "donkey"
WHERE NOT id = 5;

-- ANDs are preformed before OR's (* vs. +, essentially)
-- You can also use parentheses.

-- operators,
-- =, <, >, <=, >=, !=, <> (also not equal)
-- string operators
-- LIKE, ILIKE (case insensitive like)

-- using %'s around the string we're looking for allows there to be
-- any kind of characters before or after 'Green Day'
-- using _'s will only look for matches for those slots
-- (as in 'Dog__' would match 'Doggy' but not 'Doggyy' or 'Dogy')
SELECT *
FROM tracks
WHERE composer LIKE '%Green Day%';

-- SIMILAR TO (regexp pattern)
-- We'll have to return to this, 
SELECT *
FROM tracks
WHERE composer
SIMILAR TO '%(AC/DC|Green Day)%';






-- update --

-- delete --

-- transactions --

join
(what's that called) --

