
const express = require('express');

const cors = require('cors');
const connection = require('./utilities/db'); 
const billRouter=require('./routes/billRoute')
const userRouter= require('./routes/userRoute')


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
 
 app.use('/api/bills',billRouter)
 app.use('/api/users',userRouter)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
