require("dotenv").config(); 
const app = require('express')()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require("./models/user");

// Routes
const adminRoutes = require('./routes/adminRoutes')
const shopRoutes = require('./routes/shopRoutes')
const userRoutes = require('./routes/userRoutes')


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.use((req,res,next) => {
    User.findById('63a371735d7c2e6b96e734c5')
    .then(user => {
        req.user = new User(user.username, user.email, user.cart, user._id);
        next()
    })
    .catch(err => {
        console.log(err)
    })
})

app.use('/admin', adminRoutes)
app.use(userRoutes)
app.use(shopRoutes)


mongoose.connect(process.env.MONGODB_URL)
        .then(result => {
            app.listen(3000, () => {
                console.log('running on port 3000...')
            })
        })
        .catch(erro => {
            console.log(error)
        })