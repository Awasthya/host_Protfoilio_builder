const AuthenticationChecker = require('./middleware');
const express = require('express') 
const app = express();
const dotenv = require('dotenv');
const router = require('./router/getrouter')
require('./DB/Conn')
app.use(express.json())
app.use(require('./router/getrouter'))
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
        app.use(express.static("clientt/build"));
}
app.listen(process.env.PORT,()=>{
        console.log('Server is Started....')
})
/**
 * mongoDB link : 
 mongodb+srv://Demo:<password>@cluster0.27whm.mongodb.net/?retryWrites=true&w=majority
 */