const express = require('express');
require('./connect');
const dotenv = require('dotenv');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', postRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
