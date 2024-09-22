import { db } from "./server.js";
db.query(`CREATE TABLE IF NOT EXISTS tributes (
    id SERIAL PRIMARY KEY, 
    name TEXT, 
    date DATE,
    favourite_mix VARCHAR(255),
    tribute TEXT 

);`);
db.query(`INSERT INTO tributes (name, date, favourite_mix, tribute)
    VALUES ('Grooverider', '2024-09-16', 'AWOL Paradise Club 1994', 'Thanks for everything you contributed to the scene'),
    ('GOLDIE', '2024-09-17', 'AWOL Paradise Club 1992', 'Good night my master.  This one is heavier than the box of dubplates I used to carry for you, back in the day. I cherish all those memories in those early years of the birth of our scene and how you helped shape its future.')`);
