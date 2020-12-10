const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/fifa", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection

db.on('connected', function() {
    console.log(`Connected To MongoDB at ${db.host}:${db.port}`);
})