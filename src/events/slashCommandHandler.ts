import { ChatInputCommandInteraction } from "discord.js";
import { Event } from "../interfaces/Events";

export const event: Event = {
    name: "interactionCreate",
    run: async (bot, interaction: ChatInputCommandInteraction<"cached">) => {
        if (!interaction.isCommand()) {
            return;
        }

        const command = bot.commands.get(interaction.commandName);

        if (command) {
            if (command.adminOnly) {
                if (
                    !interaction.memberPermissions.has("Administrator") ||
                    !interaction.memberPermissions.has("ManageGuild")
                ) {
                    interaction.reply({
                        content:
                            "❌ **You do not have access to this command!**",
                        ephemeral: true,
                    });
                    return;
                }
            }

            await interaction.deferReply();
            command.run(bot, interaction);
        }
    },
};
