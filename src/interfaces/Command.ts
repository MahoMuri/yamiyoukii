import {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    SlashCommandSubcommandsOnlyBuilder,
} from "discord.js";
import { Bot } from "../client";

interface Run {
    (bot: Bot, interaction: ChatInputCommandInteraction<"cached">);
}

export interface Command {
    name: string;
    data:
        | SlashCommandBuilder
        | SlashCommandSubcommandsOnlyBuilder
        | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">;
    category: string;
    description: string;
    adminOnly: boolean;
    usage: string;
    example: string;
    placeholders?: string;
    run: Run;
}
