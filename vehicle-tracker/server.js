/*const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Serve the dummy data
app.get('/data', (req, res) => {
    const data = require('./data.json');
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
*/
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Dummy data for demonstration
const data = {
    yesterday: [
        { latitude: 28.2380, longitude: 83.9956, timestamp: '2023-08-05T10:00:00Z' },
        { latitude: 28.2390, longitude: 83.9966, timestamp: '2023-08-05T10:05:00Z' },
        { latitude: 28.2400, longitude: 83.9976, timestamp: '2023-08-05T10:10:00Z' },
    ],
    last_month: [
        { latitude: 28.2380, longitude: 83.9956, timestamp: '2023-07-10T10:00:00Z' },
        { latitude: 28.2390, longitude: 83.9966, timestamp: '2023-07-10T10:05:00Z' },
        { latitude: 28.2400, longitude: 83.9976, timestamp: '2023-07-10T10:10:00Z' },
    ],
    today: [
        { latitude: 28.2380, longitude: 83.9956, timestamp: '2023-08-07T08:00:00Z' },
        { latitude: 28.2385, longitude: 83.9960, timestamp: '2023-08-07T08:05:00Z' },
        { latitude: 28.2390, longitude: 83.9965, timestamp: '2023-08-07T08:10:00Z' },
    ]
};

// Endpoint to fetch data
app.get('/data', (req, res) => {
    const period = req.query.date;
    if (period === 'yesterday') {
        res.json(data.yesterday);
    } else if (period === 'last_month') {
        res.json(data.last_month);
    } else if (period === 'today') {
        res.json(data.today);
    } else {
        res.status(400).send('Invalid date parameter');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
