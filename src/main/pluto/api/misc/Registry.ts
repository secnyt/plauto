import Command from "../command/Command";

export default class Registry {
    static registry: any[] = []
    static register (toRegister: any) {
        if (this.shouldRegister(toRegister)) {
            this.registry.push(toRegister)
            return toRegister
        }
    }
    static shouldRegister (toRegister: any): boolean {
        return true
    }
}