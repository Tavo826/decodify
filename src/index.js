const CryptoJS = require("crypto-js")
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/decode', (req, res) => {

    const token = req.body.token;
    const key = req.body.key;

    const tokenDecrypt = JSON.parse(decrypt(token, key));
    res.json(tokenDecrypt);
});

function decrypt(data, key) {
    base64Token = Buffer.from(data, 'base64').toString('utf-8');
    return CryptoJS.AES.decrypt(base64Token, key).toString(CryptoJS.enc.Utf8);
}

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})