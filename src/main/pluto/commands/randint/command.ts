import Command from '../../api/command/Command'
import RandIntInterface from './interface'
import RandIntHandle from './handle'
import RandIntArguments from "./arguments";

export default class RandIntCommand extends Command {
    constructor () {
        super(RandIntInterface, RandIntHandle, RandIntArguments)
    }
}