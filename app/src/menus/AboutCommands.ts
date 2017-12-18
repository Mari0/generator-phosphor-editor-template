import { CommandRegistry } from "@phosphor/commands";

const commands = new CommandRegistry();

commands.addCommand('aboutCmd_Help',
{
    label: 'Help',
    mnemonic: 0, 
    execute: () => {
        console.log('Help');
    }
});

export default commands;