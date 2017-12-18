import { MenuBar } from "@phosphor/widgets";
import FileMenu from './menus/FileMenu';
import EditMenu from './menus/EditMenu';
import AboutMenu from './menus/AboutMenu';

const menuBar = new MenuBar;
menuBar.addMenu(FileMenu);
menuBar.addMenu(EditMenu);
menuBar.addMenu(AboutMenu);
menuBar.id = 'menuBar';
export default menuBar;
