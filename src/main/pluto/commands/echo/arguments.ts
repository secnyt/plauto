import Argument from "../../api/command/argument/Argument";
import ArgumentType from "../../api/command/argument/ArgumentType"

const EchoArguments: Argument[] = []

EchoArguments.push(new Argument('to_echo', ArgumentType.STRING, 'What should be said.', true))

export default EchoArguments