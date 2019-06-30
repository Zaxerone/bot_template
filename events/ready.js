module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run() {
    await this.client.wait(1000);

    this.client.appInfo = await this.client.fetchApplication();
    setInterval(async () => {
      this.client.appInfo = await this.client.fetchApplication();
    }, 60000);

    this.client.user.setActivity(`${this.client.guilds.size} Guilds`, {type: "PLAYING"});

    this.client.logger.log(
      `Le bot est prêt. ${this.client.users.size} Utilisateurs - ${this.client.guilds.size} Guilds.`,
      "ready"
    );
  }
};
