import CommandInterface from '../../api/command/CommandInterface'
import Genre from '../../api/command/Genre'

const InviteInterface = new CommandInterface()

InviteInterface
    .setName('invite')
    .setDesc('Returns invite link for Plauto.')
    .setColor('#4848db')
    .setGenre(Genre.Pluto)

export default InviteInterface