import { SlashCommandBuilder } from "discord.js";
import { Command } from "../../interfaces/Command";

export const command: Command = {
    name: "maho",
    data: new SlashCommandBuilder().setName("maho").setDescription("Meh."),
    description: "meh.",
    category: "general",
    adminOnly: true,
    usage: "/maho",
    example: `/maho`,
    run: async (bot, interaction) => {
        interaction.reply({ content: "Pogi si MahoMuri" });
    },
};
