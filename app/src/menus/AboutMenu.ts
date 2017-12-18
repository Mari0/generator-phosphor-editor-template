import {
    Menu
} from '@phosphor/widgets';
import AboutCommands from './AboutCommands';

function FileMenu(label: string, mnemonic: number, commands : any) : Menu {
    let root = new Menu({commands});
    root.title.label = label;
    root.title.mnemonic = mnemonic;
    root.addItem({ command : 'aboutCmd_Help'});
   
    return root;
}
export default FileMenu('About', 1, AboutCommands);