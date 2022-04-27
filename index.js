const express = require("express")

const PORT = process.env.port || 3001;

const app = express();

app.get("/api", (req, res) => {

    // Connecting to my DB model
    // Getting a collection/table
    // Send that data as teh JSON response 
    res.json({ message: "Hello from server!"})
})

app.get("/users/32", (req, res) => {
    const aUser = {
        firstName: "Izzie",
        lastName: "Bear",
        age: 12
    }

    res.json(aUser)
})

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})

