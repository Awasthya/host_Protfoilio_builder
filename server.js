const AuthenticationChecker = require('./middleware');
const express = require('express') 
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv');
const router = require('./router/getrouter')
const path = require('path');
require('./DB/Conn');

//  const expressfileupload = require('express-fileupload');
app.use(express.json())
app.use(require('./router/getrouter'));
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, './clientt/build')));

app.get('*',funcation = (req,res)=> {
        res.sendFile(path.join(__dirname,'./clientt/build/index.html'))
})
if (process.env.NODE_ENV === "production") {
        app.use(express.static("clientt/build"));
}
app.listen(PORT,()=>{
        console.log('Server is Started....')
})
/**
 * mongoDB link : 
 mongodb+srv://Demo:<password>@cluster0.27whm.mongodb.net/?retryWrites=true&w=majority
 */
