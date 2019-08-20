const express = require('express');

const app = express();

express.json();

app.get('/', (req, res, next) => res.send('Hello World!'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
