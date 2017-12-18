import {
    Menu
} from '@phosphor/widgets';
import fileCommands from './FileCommands';

function FileMenu(label: string, mnemonic: number, commands : any) : Menu {
    let root = new Menu({commands});
    root.title.label = label;
    root.title.mnemonic = mnemonic;
    let sub1 = new Menu({commands});
    sub1.title.label = 'More ...';

    root.addItem({ command : 'fileCmd_New'});
    root.addItem({ command : 'fileCmd_Open'});
    root.addItem({ type: 'separator' });    
    root.addItem({ command : 'fileCmd_Save'});
    root.addItem({ type: 'separator' });    
    root.addItem({ command : 'fileCmd_Import'});
    root.addItem({ command : 'fileCmd_Export'});
    root.addItem({ type: 'separator' });    
    root.addItem({ command : 'fileCmd_Settings'});
    root.addItem({ type: 'submenu', submenu: sub1 });    
    root.addItem({ command : 'fileCmd_Close'});
    
    sub1.addItem({ command : 'fileCmd_cmd1'});
    sub1.addItem({ command : 'fileCmd_cmd2'});
    return root;
}
export default FileMenu('File', 1, fileCommands);