const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let formData = [];
app.post('/api/form-data', (req, res) => {
    formData.push(req.body);
    res.send('Data received and stored.');
});

app.get('/api/form-data', (req, res) => {
    res.json(formData);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
