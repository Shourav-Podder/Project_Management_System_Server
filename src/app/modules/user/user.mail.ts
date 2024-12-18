import nodemailer from 'nodemailer'; 

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // user: "shouravpodder33@gmail.com",
      // pass: "dmhtmtkpkqllzsxn",
      
      // Production
      user: "shouravpodder33@gmail.com",
      pass: "czthluefrcslqthx",
    },
  });

export const sendEmail = async (to: string, subject: string, msg: string) => {
    await transporter.sendMail({
        to: to,
        subject: subject,
        html: msg
      });
}