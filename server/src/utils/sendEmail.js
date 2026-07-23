import * as Brevo from "@getbrevo/brevo";

const apiInstance = new Brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  Brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY,
);

const sendEmail = async ({ to, subject, html }) => {
  const email = new Brevo.SendSmtpEmail();

  email.sender = {
    name: "BloodLink",
    email: process.env.MAIL_FROM,
  };

  email.to = [
    {
      email: to,
    },
  ];

  email.subject = subject;
  email.htmlContent = html;

  await apiInstance.sendTransacEmail(email);
};

export default sendEmail;
