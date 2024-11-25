const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const multer = require('multer');
const path = require('path');

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

const db = require('./models')

//routers

const regRouter = require('./routes/cusregistration');
app.use("/register", regRouter);

const cusregRouter = require('./routes/cusregistration');
app.use("/cusregister", cusregRouter);

const adregRouter = require('./routes/adminpreg');
app.use("/adreg", adregRouter);

const addproRouter = require('./routes/addproduct');
app.use("/addpro", addproRouter);

const addprodetailsRouter = require('./routes/addproduct');
app.use("/addprodetails", addprodetailsRouter);

const addcatRouter = require('./routes/addcategory');
app.use("/addcat", addcatRouter);

const addofferRouter = require('./routes/addoffers');
app.use("/addoffers", addofferRouter);

const addimgRouter = require('./routes/gallery');
app.use("/gallery", addimgRouter);

const addempdetailsRouter = require('./routes/empaccount');
app.use("/emp", addempdetailsRouter);

app.use('/assets', express.static('assets'));
app.use(express.static('public'));


db.sequelize.sync().then(() =>{
    app.listen(3001, () => {
        console.log("Server started on port 3001");
    });
});