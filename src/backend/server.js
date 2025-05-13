const express = require('express');
const cors = require("cors");
const helmet = require('helmet');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// app.use(cors());
// app.use(helmet());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true, parameterLimit: 100000, limit: "500mb" }))
// // app.use(express.json());
// app.use(bodyParser.json({ limit: "10mb" }));

app.use(cors());
app.use(helmet());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb", parameterLimit: 100000 }));


const authRoutes = require('./routes/auth.routes');

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
})
