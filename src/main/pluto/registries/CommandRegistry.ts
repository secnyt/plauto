import Registry from "../api/misc/Registry";
import Command from "../api/command/Command";
import c from "../pluto";
import * as auth from "../auth.json"
import fetch from "node-fetch"

export default class CommandRegistry extends Registry {
    static shouldRegister (toRegister: Command): boolean {
        if (this.registry.some(cmd => cmd.name == toRegister.name)) {
            throw 'Cannot register multiple commands under the same name!'
        }
        return true
    }

    static async testGuildRegisterSlashCommand (cmd: Command) {
        const endpoint = `https://discord.com/api/v8/applications/${c.user.id}/guilds/${auth.testingGuildId}/commands`
        const commandData = {
            "name": cmd.name,
            "description": cmd.desc,
            "options": cmd.getArguments()
        }

        console.log(commandData)

        // const response = await fetch(endpoint,
        //     {
        //         method: 'post',
        //         body: JSON.stringify(commandData),
        //         headers: {
        //             Authorization: 'Bot ' + auth.token,
        //             'Content-Type': 'application/json',
        //         },
        //     })

        // console.log(await response.json())
    }
}