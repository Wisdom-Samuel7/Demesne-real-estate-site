const express = require("express")
const app = express()
const path = require("path")
const bp = require("body-parser")

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.render("../Views/home")
})

app.get("/about", (req, res) => {
    res.render("../Views/about")
})

app.get("/contact", (req, res) => {
    res.render("../Views/contact")
})

// app.get('/api', (req, res) => {
//     res.send("API")
//     const apiKey = 'e945706b37msh49917475ed758a5p18679ajsnb9c17a122007';
//     const apiUrl = 'https://facts-by-api-ninjas.p.rapidapi.com/v1/facts';
//     fetch(apiUrl, {
//         headers: {
//             'X-RapidAPI-Key': apiKey,
//             'Content-Type': 'application/json'
//         }
//     })
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error(error));
// })

app.get("/partnership", (req, res) => {
    res.render("../Views/partnership")
})

app.listen('3000', () => {
    console.log("PORT LOADING")
})