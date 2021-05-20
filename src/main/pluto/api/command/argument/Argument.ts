import ArgumentChoice from "./ArgumentChoice";

export default class Argument {
    name: string
    type: ArgumentType
    desc: string
    required: boolean
    choices?: ArgumentChoice[]
    options?: Argument[]

    constructor (name: string, type: ArgumentType, desc: string, required?: boolean, choices?: ArgumentChoice[], options?: Argument[]) {
        this.name = name
        this.type = type
        this.desc = desc
        this.required = required || true
        this.choices = choices
        this.options = options
    }
}