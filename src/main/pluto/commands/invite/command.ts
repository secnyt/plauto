import Command from '../../api/command/Command'
import InviteInterface from './interface'
import InviteHandle from './handle'

export default class EchoCommand extends Command {
    constructor () {
        super(InviteInterface, InviteHandle)
    }
}