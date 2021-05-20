import Command from '../../api/command/Command'
import EchoInterface from './interface'
import EchoHandle from './handle'
import EchoArguments from "./arguments";

export default class EchoCommand extends Command {
    constructor () {
        super(EchoInterface, EchoHandle, EchoArguments)
    }
}