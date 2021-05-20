import Argument from "../../api/command/argument/Argument";
import ArgumentType from "../../api/command/argument/ArgumentType";

const RandIntArguments: Argument[] = []

RandIntArguments.push(new Argument('min', ArgumentType.INTEGER, 'The minimum bound that should be returned.', true))
RandIntArguments.push(new Argument('max', ArgumentType.INTEGER, 'The maximum bound that should be returned.', true))

export default RandIntArguments