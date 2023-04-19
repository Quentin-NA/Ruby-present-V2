const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

// Le reste de votre code ici



const API_KEY = "AIzaSyBRWvI5Sx4URj7oC5qdy2C-L7snYCd5zQ0";
const SPREADSHEET_ID = "1p2jQxopbxImai3jTx96olNqHfOy5OmCkv0pINGxQcws";
const HOBBIESRANGE = "hobbies!A1:Z9999";
const HOBBIESURL = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${HOBBIESRANGE}?key=${API_KEY}`;
const DATARANGE = "data!A1:Z9999";
const DATAURL = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${DATARANGE}?key=${API_KEY}`;


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  

app.get("/", async (req, res) => {
  const fetch = await import("node-fetch");
  const response = await fetch.default(DATAURL);
  const data = await response.json();
  const values = data.values;
  const headers = values[0];
  const rows = values.slice(1);
  let elements = [];

  elements = rows.map((row) => {
    return headers.reduce((obj, header, index) => {
      obj[header] = row[index];
      return obj;
    }, {});
  });
  console.log(elements);
  res.send(elements);
});


app.get("/hobbies", async (req, res) => {
  const fetch = await import("node-fetch");
  const response = await fetch.default(HOBBIESURL);  
  const data = await response.json();
  const values = data.values;
  const headers = values[0];
  const rows = values.slice(1);
  let elements = [];

  elements = rows.map((row) => {
    return headers.reduce((obj, header, index) => {
      obj[header] = row[index];
      return obj;
    }, {});
  });
  console.log(elements);
  res.send(elements);
});

app.listen(3001, () => {
  console.log("vous ecoutez le port http://localhost:3001");
});
