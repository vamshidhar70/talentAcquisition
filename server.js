const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const cors=require('cors');
const bodyparser=require('body-parser');
const app=express();
const path=require('path');

const connectDB=require('./server/database/connection');
dotenv.config({path:'config.env'});

const PORT=process.env.PORT||8080;
app.use(cors());
app.use(morgan('tiny'));
connectDB();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use('/',require('./server/routes/router'))
app.listen(PORT,()=>{
    console.log(`server is running on the port http://localhost:${PORT}`);
})
