const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://usuarioNode:R6rQ8o55Zdz5ING5@cluster0.zuaav.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.Promise = global.Promise;

module.exports = mongoose;