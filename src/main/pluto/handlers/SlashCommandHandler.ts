import CommandRegistry from "../registries/CommandRegistry";

export default class SlashCommandHandler {
    static async handle (interaction) {
        CommandRegistry.registry.find(c => c.name == interaction.data.name).handle(interaction)
    }
}
