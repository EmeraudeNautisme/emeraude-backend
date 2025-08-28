module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "mail.gmx.com"),
        port: env.int("SMTP_PORT", 587),
        secure: false, // true si tu utilises 465
        auth: {
          user: env("SMTP_USER"),
          pass: env("SMTP_PASS"),
        },
      },
      settings: {
        defaultFrom: env("EMAIL_FROM", "emeraude.nautisme@gmx.fr"),
        defaultReplyTo: env("EMAIL_REPLY_TO", "emeraude.nautisme@gmx.fr"),
      },
    },
  },
});
