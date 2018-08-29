const express = require('express');
const app = express();

const PORT = process.env.PORT || 9000;


// Routes
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the App'
    });
});

app.listen(PORT, () => {
    console.log(`Server is starting at ${PORT}`);
});