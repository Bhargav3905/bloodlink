import Brevo from "@getbrevo/brevo";

const apiInstance = new Brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  Brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY,
);

const sendEmail = async ({ to, subject, html }) => {
  const email = new Brevo.SendSmtpEmail();

  email.sender = {
    email: process.env.MAIL_FROM,
    name: "BloodLink",
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