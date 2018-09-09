const express = require('express');
const router = express.Router();
const Axios = require('axios');

router.get('/', (req, res, next) => {
    let getURL = `https://api.salesloft.com/v2/people.json`;

    let fullURL = Axios.get(getURL, {
        auth: {
            auth_key: process.env.SL_KEY,
        },
    });

    console.log(getURL);

    Axios.get(fullURL)
    .then((data) => {
        let people = [];
        data.forEach(person => {
            people.push({
                first_name: first_name,
                last_name: last_name,
                email_address: email_address,
                title: title
            })
        });
        res.json(data);
    })
    .catch((err)=> {
        console.log('BEGIN ERROR:', err, 'END ERROR');
        res.json({
            'status': 'error',
            'message': 'Failed to reach SalesLoft API.'
        })
    });
})

module.exports = router;