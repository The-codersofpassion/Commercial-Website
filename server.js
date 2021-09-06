const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.json());

$config['base_url']  =  "http://".$_SERVER['HTTP_HOST'];

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.post('/', (req,res) => {
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "nupur532002@gmail.com",
            pass: "bbjbfkfkf"
        }
    })

    const mailOptions = {
        from:  req.body.email,
        to: 'nupur532002@gmail.com',
        subject: 'Email from your website',
        text: req.body.text +"\n " + req.body.phone + "\n" + req.body.name + "\n" + req.body.email,
    }


    transporter.sendMail(mailOptions, (error,info) =>{
        if(error){
            console.log('error');
            res.send('error');
            console.log(error.message);
        }else {
            console.log('Email sent! ' + info.response);
            res.send('success');
        }
    })

})

app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`)
})
