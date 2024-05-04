const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('createraid')
		.setDescription('Creates a Raid')
        .addUserOption(option =>
            option
                .setName('raidleitung')
                .setDescription('The member for raidleitung')
                .setRequired(true))
        .addStringOption(option =>
            option
                .setName('start')
                .setDescription('start')
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName('goal')
                .setDescription('goal')
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName('datum')
                .setDescription('date for raid')
                .setRequired(true)
        ),
	async execute(interaction) {
        const user = interaction.options.getUser('raidleitung');
        const start = interaction.options.getString('start');
        const goal = interaction.options.getString('goal');
        const datum = interaction.options.getString('datum');

        try {
            const message = await interaction.reply({content: `||@everyone||\nAm **${datum}** findet ein **Raid** statt!
            
            **Startzeit:** ${start} Uhr
            **Raid Leiter:**  ${user}
            **Raid Ziel:** ${goal}
            
            **Anmelde/Abmelde [Reaktion] Möglichkeiten:**
            **Grünes Quadrat** = Anmeldung :green_square:
            **Gelbes Quadrat** = Nicht sicher :yellow_square:
            **Rotes Quadrat** = Abmeldung :red_square:
            
            Es wird gebeten sich um **5 min** vor dem Raid im Funk einzufinden.\n\n**Regeln:**\n- PTS Während dem Raid Aktiv | Nur Raid Leiter / Caller + SH Leitung / Ranghöchster SHler, haben Berechtigung zu sprechen (Nur wichtiges / Informationen).\n- Sollte man was wichtiges sagen müssen während dem Raid, so darf man dies tun (**Wichtiges** = Feinde / SCPs / D-Klassen gesichtet, Stellungen gesichtet usw).\n- Auf Befehle vom Raid Leiter werden gehört.\n- Kein durcheinander reden / Scheiße bauen während der Planung / Raid's.\n
            :warning: **Zusatz Regeln können vom Raid Leiter gemacht werden** :warning: 
            :warning: **Verstoß gegen diese Regeln führt zum Demote / Negativen!** :warning:`,fetchReply: true});
            message.react('🟩');
            message.react('🟨');
            message.react('🟥');
        } catch (err) {
            console.log("Error: " + err);
        }

	},
};