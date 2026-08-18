const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/receive', (req, res) => {
    console.log('--- تم استلام بيانات جديدة ---');
    console.log(req.body);
    res.status(200).send('Received');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
