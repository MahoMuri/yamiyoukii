import { bold, EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { Command } from "../../interfaces/Command";

export const command: Command = {
    name: "avatar",
    data: new SlashCommandBuilder()
        .setName("avatar")
        .setDescription("Display's a user's avatar")
        .addUserOption((option) =>
            option
                .setName("user")
                .setDescription("The user to get the avatar from")
        ),
    category: "general",
    description: "Display's a user's avatar",
    adminOnly: false,
    usage: "/avatar [user",
    example: `\`\`\`fix
    /avatar
    /avatar @MahoMuri
    \`\`\``,
    run: async (bot, interaction) => {
        const member =
            interaction.options.getMember("user") || interaction.member;

        const embed = new EmbedBuilder()
            .setAuthor({
                name: member.user.tag,
                iconURL: member.displayAvatarURL({ size: 512 }),
            })
            .setColor("#2F2F2F")
            .setDescription(
                `[${bold("Avatar URL")}](${member.displayAvatarURL({
                    size: 512,
                })})`
            )
            .setImage(member.displayAvatarURL({ size: 512 }));

        interaction.editReply({ embeds: [embed] });
    },
};
