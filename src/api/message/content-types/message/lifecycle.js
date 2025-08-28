module.exports = {
  async afterCreate() {
    try {
      await strapi.plugin("email").service("email").send({
        to: "emeraude.nautisme@gmx.fr",
        subject: "Nouveau message",
        text: "On vous a envoyé un message ! Vérifiez votre espace administrateur.",
      });
    } catch (err) {
      strapi.log.error("Erreur envoi email (message.afterCreate):", err);
    }
  },
};
