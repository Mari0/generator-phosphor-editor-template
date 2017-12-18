import {
    Widget
  } from '@phosphor/widgets';

import menuBar from './MenuBar';
import editor from './EditorLayout';
import '../style/index.css';
  function Main(): void{
      Widget.attach(menuBar, document.body);
      Widget.attach(editor, document.body);
  }

window.onload = Main;