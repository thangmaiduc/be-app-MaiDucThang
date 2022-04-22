const express = require('express');
const logger = require('morgan');
const dotenv =require('dotenv')
const mongoose = require('mongoose');
const cors = require('cors')
const userRouter = require('./routes/users')
const eventRouter = require('./routes/events')
const authRouter = require('./routes/auth')


 

const app = express();

// view engine setup

dotenv.config()
app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/events', eventRouter);
    


 app.get('/', (req, res)=>{
   res.status(200).json({status:"ok"});
 })
 


// error handler
app.use((error, req, res, next) => {
  console.error(error);
  const status = error.statusCode || 500;
  const message = error.message;
  
  if(status === 422){
    let errors={} ;
    error.data.forEach( err =>{
      
      let key = err.param;
      let value = err.msg;
      
      errors[key] = value;
    })
    res.status(status).json({ message: message, errors  });
    return
  }
  res.status(status).json({ message: message });
});

mongoose.connect(process.env.MONGODB_URL)
.then(res=>console.log('Connected to database'))
.catch(err => console.log('Err '+ err.message));
const PORT = process.env.PORT || 3000
app.listen( PORT , ()=>{
    console.log('Server listening on port :' +PORT );
} )