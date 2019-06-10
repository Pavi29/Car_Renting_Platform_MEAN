/**
 * Send email after booking.
 */

'use strict';

const nodemailer = require("nodemailer");

   

    async function sendMail(){

      let testAccount = await nodemailer.createTestAccount();

      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, 
        auth: {
          user: testAccount.email, 
          pass: testAccount.password 
        }
      });
      
      let mailOptions={
        from: '"SL Rent A Car" <pavithrajayasinghe29@gmail.com>', //sender
        to: "pavithragayanijayasinghe@gmail.com", //receiver 
        subject: "Booking Details", 
        html: "<b>Your booking was successful and your booking details have been downloaded in PDF</b>"
      }
      
      let info = await transporter.sendMail(mailOptions);
        
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      callback(info);
      } 
      
      sendMail().catch(console.error);
    
