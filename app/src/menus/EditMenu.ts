import {
    Menu
} from '@phosphor/widgets';
import editCommands from './EditCommands';

function FileMenu(label: string, mnemonic: number, commands : any) : Menu {
    let root = new Menu({commands});
    root.title.label = label;
    root.title.mnemonic = mnemonic;
    
    root.addItem({ command : 'editCmd_Undo'});
    root.addItem({ command : 'editCmd_Redo'});
    root.addItem({ type: 'separator' });    
    root.addItem({ command : 'editCmd_Cut'});
    root.addItem({ command : 'editCmd_Copy'});
    root.addItem({ command : 'editCmd_Paste'});
    root.addItem({ command : 'editCmd_Delete'});    
    root.addItem({ type: 'separator' });    
    root.addItem({ command : 'editCmd_Find'});
    root.addItem({ command : 'editCmd_Replace'});
    
    return root;
}
export default FileMenu('Edit', 1, editCommands);