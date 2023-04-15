const express = require('express');
const app = express();

const API_KEY = "AIzaSyBRWvI5Sx4URj7oC5qdy2C-L7snYCd5zQ0";
const SPREADSHEET_ID = "1p2jQxopbxImai3jTx96olNqHfOy5OmCkv0pINGxQcws";
const RANGE = "data!A1:Z9999";
const URL = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;


app.get("/", async (req, res) => {
  const fetch = await import("node-fetch");
  const response = await fetch.default(URL);
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
