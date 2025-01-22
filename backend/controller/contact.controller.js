const Contact = require("../models/contact.model")

exports.store = async (req, res) => {
    debugger;
    try {
        const contact = await Contact.create(req.body);
        res.json({ message: "contact Created Successfully", status: 200, success: true, contact })
    }
    catch (err) {
        console.log(err)
    }
}