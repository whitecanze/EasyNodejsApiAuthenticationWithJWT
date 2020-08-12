const express = require('express')
const app = express()
const env = require('dotenv')
const mongoose = require('mongoose')

// Import Routes
const authRoute = require('./routes/auth')
const postsRoute = require('./routes/posts')

env.config()
// connect to MongoDB
mongoose.connect(
    process.env.DB_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log("Database's connected!")
)



//Middlewares
app.use(express.json())

//Route Middlewares
app.use('/api/user',authRoute)
app.use('/api/posts',postsRoute)

app.listen(3000,() => console.log('Server Up and running!'))
