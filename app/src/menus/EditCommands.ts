import { CommandRegistry } from "@phosphor/commands";

const commands = new CommandRegistry();

commands.addCommand('editCmd_Undo',
{
    label: 'Undo',
    iconClass: 'fa fa-undo',
    mnemonic: 0, 
    execute: () => {
        console.log('Undo');
    }
});

commands.addCommand('editCmd_Redo',
{
    label: 'Redo',
    iconClass: 'fa fa-rotate-right',
    mnemonic: 0, 
    execute: () => {
        console.log('Redo');
    }
});

commands.addCommand('editCmd_Cut',
{
    label: 'Cut',
    iconClass: 'fa fa-cut',
    mnemonic: 0, 
    execute: () => {
        console.log('Save');
    }
});

commands.addCommand('editCmd_Copy',
{
    label: 'Copy',
    iconClass: 'fa fa-copy',
    mnemonic: 0, 
    execute: () => {
        console.log('Copy');
    }
});

commands.addCommand('editCmd_Paste',
{
    label: 'Paste',
    iconClass: 'fa fa-paste',    
    mnemonic: 0, 
    execute: () => {
        console.log('Paste');
    }
});

commands.addCommand('editCmd_Delete',
{
    label: 'Delete',
    iconClass: 'fa fa-trash',
    mnemonic: 0, 
    execute: () => {
        console.log('Delete');
    }
});

commands.addCommand('editCmd_Find',
{
    label: 'Find',
    iconClass: 'fa fa-search',
    execute: () => {
        console.log('Find');
    }
});
commands.addCommand('editCmd_Replace',
{
    label: 'Replace',
    execute: () => {
        console.log('Replace');
    }
});

export default commands;