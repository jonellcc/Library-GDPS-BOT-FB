const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;
const apiUrl = 'http://158.101.198.227:8761/api/library';

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/library', async (req, res) => {
    try {
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data from API');
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
