import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const cors = cors();
const dotenv = dotenv();

dotenv.config();

const pg = pg();

const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running in PORT ${PORT}`);
});

app.get("/", (req, res) => {
  res.json({ message: "Are you looking at my root route" });
});

//we need to access express, cors, pg and dotenv

// need to initialise express

// configure dotenv

//i need to tell my express app to use json

// need to tell app to use cors

//i need to set up a port for my app to listen
// i need to set up my database pool using the database string
// i need to set up a root route

// you need two routes minimum
// you need a route to READ the database data
// you need a route to CREATE or ADD new data to the database
//in your CREATE route you need the request.body is an object that represents the form data coming from my client

//you need to use SQL queries and parameters in these routes
// in the .env file you need your databsde connection string with the correct PASSWORD

// your .env file should contain your connection string, which we get from SUPABASE when I connect

//add my password with out the square brackets
// for this assignment i need a minimum of one table to sort my user feedback
