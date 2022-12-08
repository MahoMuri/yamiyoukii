import {
    ChannelType,
    PermissionFlagsBits,
    SlashCommandBuilder,
} from "discord.js";
import { Command } from "../../interfaces/Command";

export const command: Command = {
    name: "generate",
    data: new SlashCommandBuilder()
        .setName("generate")
        .setDescription("Generate client channels")
        .addStringOption((option) =>
            option
                .setName("name")
                .setDescription("The name of the category")
                .setRequired(true)
        ),
    category: "admin",
    description: "Generate client channels",
    adminOnly: true,
    usage: "/generate <categoryName>",
    example: "/generate myClient",
    run: async (bot, interaction) => {
        const categoryName = interaction.options.getString("name");

        const category = await interaction.guild.channels.create({
            name: categoryName,
            type: ChannelType.GuildCategory,
            permissionOverwrites: [
                {
                    id: interaction.guild.roles.everyone.id,
                    deny: [PermissionFlagsBits.ViewChannel],
                },
            ],
        });

        // Create General Channel
        await interaction.guild.channels.create({
            name: "general",
            parent: category,
        });

        // Create Feedback Channel
        await interaction.guild.channels.create({
            name: "feedback",
            parent: category,
        });

        // Create Deadline Channel
        await interaction.guild.channels.create({
            name: "deadline",
            parent: category,
        });

        // Create Project Details Channel
        await interaction.guild.channels.create({
            name: "project-details",
            parent: category,
        });

        // Create Coding Channel
        await interaction.guild.channels.create({
            name: "coding",
            parent: category,
        });

        interaction.editReply({
            content: `✅ **Created ${categoryName} channels!**`,
        });
    },
};
