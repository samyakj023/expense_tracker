const mongoose = require('mongoose')
const url =`mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASS}@cluster0.yqnnq.mongodb.net/${process.env.DB_NAME}`;
mongoose.connect(url , {useNewUrlParser : true , useUnifiedTopology : true})

const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected' , () => console.log('Mongo DB Connection Successfull'))