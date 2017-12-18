import { CommandRegistry } from "@phosphor/commands";

const commands = new CommandRegistry();

commands.addCommand('fileCmd_New',
{
    label: 'New',
    mnemonic: 0, 
    execute: () => {
        console.log('New');
    }
});

commands.addCommand('fileCmd_Open',
{
    label: 'Open',
    mnemonic: 0, 
    execute: () => {
        console.log('Open');
    }
});

commands.addCommand('fileCmd_Save',
{
    label: 'Save',
    iconClass: 'fa fa-save',
    mnemonic: 0, 
    execute: () => {
        console.log('Save');
    }
});

commands.addCommand('fileCmd_Import',
{
    label: 'Import',
    mnemonic: 0, 
    execute: () => {
        console.log('Import');
    }
});

commands.addCommand('fileCmd_Export',
{
    label: 'Export',
    mnemonic: 0, 
    execute: () => {
        console.log('Export');
    }
});

commands.addCommand('fileCmd_Close',
{
    label: 'Close',
    iconClass: 'fa fa-times',
    mnemonic: 0, 
    execute: () => {
        console.log('Close');
    }
});

commands.addCommand('fileCmd_Settings',
{
    label: 'Settings',
    iconClass: 'fa fa-gear',
    execute: () => {
        console.log('Settings');
    }
});
commands.addCommand('fileCmd_cmd1',
{
    label: 'Command1',
    execute: () => {
        console.log('Command1');
    }
});

commands.addCommand('fileCmd_cmd2',
{
    label: 'Command2',
    execute: () => {
        console.log('Command2');
    }
});

export default commands;