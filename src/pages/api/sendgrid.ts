import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from 'next';


async function sendEmail(req:NextApiRequest, res:NextApiResponse) {
    if(process.env.NEXT_PUBLIC_SENDGRID_API_KEY){
        sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
    }
    const {name,email,message}= req.body
  
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "sophialanzendorf@gmail.com", // Your email where you'll receive emails
      from: "sophialanzendorf@gmail.com", // your website email address here
      subject: `I'd like to connect!`,
      html: `  <div class="container" style="margin-left: 20px;margin-right: 20px;">
      <h3>You've got a new mail from ${name}, their email is: ✉️${email} </h3>
      <div style="font-size: 16px;">
      <p>Message:</p>
      <p>${message}</p>
      <br>
      </div>`,
    })
   .catch((error)=> {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
   })
  return res.status(200).json({ error: "" });
}
export default sendEmail;