import BaseWidget from './widgets/BaseWidget';

import { DockPanel, BoxPanel } from '@phosphor/widgets';

let widget1 = new BaseWidget('Widget1');
let widget2 = new BaseWidget('Widget2');
let widget3 = new BaseWidget('Widget3');
let widget4 = new BaseWidget('Widget4');
let widget5 = new BaseWidget('Widget5');

let main = new BoxPanel({ direction: 'top-to-bottom', spacing: 0 });
let box1 = new BoxPanel({ direction: 'left-to-right', spacing: 0 });

let dock1 = new DockPanel();
dock1.addWidget(widget4);
dock1.addWidget(widget5, {mode: 'split-right'});

box1.addWidget(dock1);

let dock2 = new DockPanel();
dock2.addWidget(widget2);
dock2.addWidget(widget3, { mode: 'split-left' });
dock2.addWidget(widget1, { ref: widget3 });

main.addWidget(dock2);
main.addWidget(box1);
export default main;