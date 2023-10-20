const AuthenticationChecker = require('./middleware');
const express = require('express') 
const app = express();
const dotenv = require('dotenv');
const router = require('./router/getrouter')
require('./DB/Conn')
const path = require('path')
app.use(express.json())
app.use(require('./router/getrouter'))
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, './clientt/build')));

app.get('*',function(req,res){
        res.sendFile(path.join(__dirname, './clientt/build/index.html'))
})
app.listen(process.env.PORT,()=>{
        console.log('Server is Started....')
})
/**
 * mongoDB link : 
 mongodb+srv://Demo:<password>@cluster0.27whm.mongodb.net/?retryWrites=true&w=majority
 */