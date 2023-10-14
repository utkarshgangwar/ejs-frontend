var express = require('express');
var router = express.Router();
const customer = require('../models/customer')
const contact = require('../models/contact')
const sendgrid = require('../services/sendgridService')

// -------------------- Test Start-------------------- 
router.get('/test', async (req, res) => {
    const customerData = await customer.find();
    return res.render("test", { customerData });
});


// router.post('/test', async (req, res) => {

//     const firstName = req.body.firstName;
//     const lastName = req.body.lastName;
//     await customer.create({ firstName, lastName });

//     const customerData = await customer.find();
//     return res.render("test", { customerData });
// });

// -------------------- Test -------------------- 


router.get('/about', (req, res) => {
    return res.render("aboutUs");
});

router.get('/accomodation', (req, res) => {
    return res.render("accomodation");
});

// router.get('/blog', (req, res) => {
//     return res.render("blog");
// });

router.get('/contact', (req, res) => {
    return res.render("contact");
});

router.post('/contact', async (req, res) => {

    const name = req.body.name;
    const emailId = req.body.emailId;
    const subject = req.body.message;
    const message = req.body.message;
    await contact.create({ name, emailId, subject, message });

    const data = {
        name,
        emailId,
        subject,
        message,
    }

    console.log('---------------', data);

    sendgrid.sendgrid(data)

    return res.render("contact");
});

router.get('/', (req, res) => {
    try {
        return res.render("index");
    } catch (err) {
        res.send('Error ' + err)
    }

});

router.get('/home', (req, res) => {
    try {
        return res.render("index");
    } catch (err) {
        res.send('Error ' + err)
    }
});

router.post('/home', async (req, res) => {

    // Mongo-------------------
    // const firstName = req.body.firstName;
    // const lastName = req.body.lastName;

    const checkIn = req.body.checkInData;
    const checkOut = req.body.checkOutData;
    const room = req.body.rooms;
    const adult = req.body.adults;
    const childrenb = req.body.children;
    const { child1, child2, child3, child4, child5, child6, child7, child8 } = req.body;
    const childrenAge = {
        child1,
        child2,
        child3,
        child4,
        child5,
        child6,
        child7,
        child8
    }
    // create
    await customer.create({ firstName, lastName, checkIn, checkOut, room, adult, childrenb, childrenAge });

    // Sendgrid----------------
    const data = {
        firstName,
        lastName,
        checkIn,
        checkOut,
        room,
        adult,
        childrenb
    }
    sendgrid.sendgrid(data);
    // -----------------------
    return res.render("index");
});

router.get('/gallery', (req, res) => {
    try {
        return res.render("gallery");
    } catch (err) {
        res.send('Error ' + err)
    }

});

router.get('/services', (req, res) => {
    try {
        return res.render("services");
    } catch (err) {
        res.send('Error ' + err)
    }

});

router.get('*', (req, res) => {
    try {
        return res.render("404");
    } catch (err) {
        res.send('Error ' + err)
    }

});


module.exports = router;