const express = require('express')
const cors = require('cors');
require('dotenv').config();
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const database = require('./database');
database();

const Score = require('./models/Score');

const port = 5000;

app.use(cors({
    origin: 'http://localhost:3000'
  }));

app.get("/api", (req, res) => {
    res.send("Welcome to the Carcassonne API!");
})

app.get("/api/leaderboard", async (req, res) => {
    
    let query = {mode: req.query.mode, size: req.query.size}
    try{
        const result = await Score.find(query).sort({points: -1}).limit(8);
        res.json({"scores": result});
    } catch(err) {
        res.status(500).json({error: err.message})
    }
})

app.post('/api/score', (req, res) => {
    const data = req.body;
    console.log('Data is: ');
    console.log(data);
    const score = new Score({
        player: data.player,
        mode: data.mode,
        size: data.size,
        points: data.points,
    });
    score.save().then((result) => {
        res.send(result);
    }).catch((err) =>{
        console.log(err);
    })
    
  });



app.listen(process.env.PORT || port, () => {console.log("Server started on port "+process.env.PORT || port)})