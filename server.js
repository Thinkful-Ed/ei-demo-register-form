const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/api/register', (req, res) => {
    if (req.body.name[0].toLowerCase() !== 'j') {
        return res.status(400).json({
            reason: 'ValidationError',
            code: 400,
            location: 'name',
            message: 'Cycling club for Js only'
        });
    }
    return res.sendStatus(200);
});

app.listen(8080);
