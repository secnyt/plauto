import CommandRegistry from "../registries/CommandRegistry";
import registerCommands from "../registers/RegisterCommands";

registerCommands(registered => {
    CommandRegistry.testGuildRegisterSlashCommand(registered).catch(err => {
        console.error('Slash command registration error:\n', err)
    })
})
