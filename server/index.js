const express = require('express');
const { mongoose } = require('mongoose');
const userRoutes =  require('./routes/userRoutes');
const productRoutes =  require('./routes/productRoutes');
require('dotenv/config');

const app = express();

app.use(express.json());

mongoose.connect(process.env.DB, {
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(() => {
    console.log("Connected to mongo Atlas");
}).catch((error) => {
    console.log("Error occured while connecting to database "+ error);
})


app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.get('*', (req, res) => {
    res.status(404).send('Route not found');
})


app.listen(process.env.PORT , () => {
   console.log(`Server listening on port ${process.env.PORT}`);
})