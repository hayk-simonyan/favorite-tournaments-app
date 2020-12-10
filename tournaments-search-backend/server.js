const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const connectDB = require('./config/db');
const tournamentRoutes = require('./routes/api/tournaments');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

app.use('/api/tournaments', tournamentRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
