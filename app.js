webpackJsonp([0],{

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var widgets_1 = __webpack_require__(14);
var FileMenu_1 = __webpack_require__(225);
var EditMenu_1 = __webpack_require__(227);
var AboutMenu_1 = __webpack_require__(229);
var menuBar = new widgets_1.MenuBar;
menuBar.addMenu(FileMenu_1.default);
menuBar.addMenu(EditMenu_1.default);
menuBar.addMenu(AboutMenu_1.default);
menuBar.id = 'menuBar';
exports.default = menuBar;


/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var widgets_1 = __webpack_require__(14);
var FileCommands_1 = __webpack_require__(226);
function FileMenu(label, mnemonic, commands) {
    var root = new widgets_1.Menu({ commands: commands });
    root.title.label = label;
    root.title.mnemonic = mnemonic;
    var sub1 = new widgets_1.Menu({ commands: commands });
    sub1.title.label = 'More ...';
    root.addItem({ command: 'fileCmd_New' });
    root.addItem({ command: 'fileCmd_Open' });
    root.addItem({ type: 'separator' });
    root.addItem({ command: 'fileCmd_Save' });
    root.addItem({ type: 'separator' });
    root.addItem({ command: 'fileCmd_Import' });
    root.addItem({ command: 'fileCmd_Export' });
    root.addItem({ type: 'separator' });
    root.addItem({ command: 'fileCmd_Settings' });
    root.addItem({ type: 'submenu', submenu: sub1 });
    root.addItem({ command: 'fileCmd_Close' });
    sub1.addItem({ command: 'fileCmd_cmd1' });
    sub1.addItem({ command: 'fileCmd_cmd2' });
    return root;
}
exports.default = FileMenu('File', 1, FileCommands_1.default);


/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var commands_1 = __webpack_require__(31);
var commands = new commands_1.CommandRegistry();
commands.addCommand('fileCmd_New', {
    label: 'New',
    mnemonic: 0,
    execute: function () {
        console.log('New');
    }
});
commands.addCommand('fileCmd_Open', {
    label: 'Open',
    mnemonic: 0,
    execute: function () {
        console.log('Open');
    }
});
commands.addCommand('fileCmd_Save', {
    label: 'Save',
    iconClass: 'fa fa-save',
    mnemonic: 0,
    execute: function () {
        console.log('Save');
    }
});
commands.addCommand('fileCmd_Import', {
    label: 'Import',
    mnemonic: 0,
    execute: function () {
        console.log('Import');
    }
});
commands.addCommand('fileCmd_Export', {
    label: 'Export',
    mnemonic: 0,
    execute: function () {
        console.log('Export');
    }
});
commands.addCommand('fileCmd_Close', {
    label: 'Close',
    iconClass: 'fa fa-times',
    mnemonic: 0,
    execute: function () {
        console.log('Close');
    }
});
commands.addCommand('fileCmd_Settings', {
    label: 'Settings',
    iconClass: 'fa fa-gear',
    execute: function () {
        console.log('Settings');
    }
});
commands.addCommand('fileCmd_cmd1', {
    label: 'Command1',
    execute: function () {
        console.log('Command1');
    }
});
commands.addCommand('fileCmd_cmd2', {
    label: 'Command2',
    execute: function () {
        console.log('Command2');
    }
});
exports.default = commands;


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var widgets_1 = __webpack_require__(14);
var EditCommands_1 = __webpack_require__(228);
function FileMenu(label, mnemonic, commands) {
    var root = new widgets_1.Menu({ commands: commands });
    root.title.label = label;
    root.title.mnemonic = mnemonic;
    root.addItem({ command: 'editCmd_Undo' });
    root.addItem({ command: 'editCmd_Redo' });
    root.addItem({ type: 'separator' });
    root.addItem({ command: 'editCmd_Cut' });
    root.addItem({ command: 'editCmd_Copy' });
    root.addItem({ command: 'editCmd_Paste' });
    root.addItem({ command: 'editCmd_Delete' });
    root.addItem({ type: 'separator' });
    root.addItem({ command: 'editCmd_Find' });
    root.addItem({ command: 'editCmd_Replace' });
    return root;
}
exports.default = FileMenu('Edit', 1, EditCommands_1.default);


/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var commands_1 = __webpack_require__(31);
var commands = new commands_1.CommandRegistry();
commands.addCommand('editCmd_Undo', {
    label: 'Undo',
    iconClass: 'fa fa-undo',
    mnemonic: 0,
    execute: function () {
        console.log('Undo');
    }
});
commands.addCommand('editCmd_Redo', {
    label: 'Redo',
    iconClass: 'fa fa-rotate-right',
    mnemonic: 0,
    execute: function () {
        console.log('Redo');
    }
});
commands.addCommand('editCmd_Cut', {
    label: 'Cut',
    iconClass: 'fa fa-cut',
    mnemonic: 0,
    execute: function () {
        console.log('Save');
    }
});
commands.addCommand('editCmd_Copy', {
    label: 'Copy',
    iconClass: 'fa fa-copy',
    mnemonic: 0,
    execute: function () {
        console.log('Copy');
    }
});
commands.addCommand('editCmd_Paste', {
    label: 'Paste',
    iconClass: 'fa fa-paste',
    mnemonic: 0,
    execute: function () {
        console.log('Paste');
    }
});
commands.addCommand('editCmd_Delete', {
    label: 'Delete',
    iconClass: 'fa fa-trash',
    mnemonic: 0,
    execute: function () {
        console.log('Delete');
    }
});
commands.addCommand('editCmd_Find', {
    label: 'Find',
    iconClass: 'fa fa-search',
    execute: function () {
        console.log('Find');
    }
});
commands.addCommand('editCmd_Replace', {
    label: 'Replace',
    execute: function () {
        console.log('Replace');
    }
});
exports.default = commands;


/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var widgets_1 = __webpack_require__(14);
var AboutCommands_1 = __webpack_require__(230);
function FileMenu(label, mnemonic, commands) {
    var root = new widgets_1.Menu({ commands: commands });
    root.title.label = label;
    root.title.mnemonic = mnemonic;
    root.addItem({ command: 'aboutCmd_Help' });
    return root;
}
exports.default = FileMenu('About', 1, AboutCommands_1.default);


/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var commands_1 = __webpack_require__(31);
var commands = new commands_1.CommandRegistry();
commands.addCommand('aboutCmd_Help', {
    label: 'Help',
    mnemonic: 0,
    execute: function () {
        console.log('Help');
    }
});
exports.default = commands;


/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BaseWidget_1 = __webpack_require__(232);
var widgets_1 = __webpack_require__(14);
var widget1 = new BaseWidget_1.default('Widget1');
var widget2 = new BaseWidget_1.default('Widget2');
var widget3 = new BaseWidget_1.default('Widget3');
var widget4 = new BaseWidget_1.default('Widget4');
var widget5 = new BaseWidget_1.default('Widget5');
var main = new widgets_1.BoxPanel({ direction: 'top-to-bottom', spacing: 0 });
var box1 = new widgets_1.BoxPanel({ direction: 'left-to-right', spacing: 0 });
var dock1 = new widgets_1.DockPanel();
dock1.addWidget(widget4);
dock1.addWidget(widget5, { mode: 'split-right' });
box1.addWidget(dock1);
var dock2 = new widgets_1.DockPanel();
dock2.addWidget(widget2);
dock2.addWidget(widget3, { mode: 'split-left' });
dock2.addWidget(widget1, { ref: widget3 });
main.addWidget(dock2);
main.addWidget(box1);
exports.default = main;


/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var widgets_1 = __webpack_require__(14);
var BaseWidget = /** @class */ (function (_super) {
    __extends(BaseWidget, _super);
    function BaseWidget(name) {
        var _this = _super.call(this, { node: BaseWidget.createNode() }) || this;
        _this.title.label = name;
        _this.title.closable = false;
        _this.title.caption = "Long description for: " + name;
        _this.addClass(name.toLowerCase());
        _this.addClass('content');
        return _this;
    }
    BaseWidget.createNode = function () {
        var node = document.createElement('div');
        var content = document.createElement('div');
        content.style.background = 'blue';
        node.appendChild(content);
        return node;
    };
    BaseWidget.prototype.getContentNode = function () {
        return this.node.firstChild;
    };
    return BaseWidget;
}(widgets_1.Widget));
exports.default = BaseWidget;


/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(234);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(250)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./index.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports
exports.i(__webpack_require__(235), "");
exports.i(__webpack_require__(236), "");
exports.i(__webpack_require__(246), "");
exports.i(__webpack_require__(247), "");
exports.i(__webpack_require__(248), "");
exports.i(__webpack_require__(249), "");

// module
exports.push([module.i, "body {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n\n\n#menuBar {\n  flex: 0 0 auto;\n}\n\n\n#main {\n  flex: 1 1 auto;\n}\n\n\n#palette {\n  min-width: 300px;\n  border-right: 1px solid #DDDDDD;\n}\n\n\n#dock {\n  padding: 4px;\n}\n\n.content {\n  min-width: 50px;\n  min-height: 50px;\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n  border: 1px solid #C0C0C0;\n  border-top: none;\n  background: white;\n  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);\n}\n\n\n.content > div {\n  flex: 1 1 auto;\n  border: 1px solid #505050;\n  overflow: auto;\n}", ""]);

// exports


/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/*-----------------------------------------------------------------------------\r\n| Copyright (c) 2014-2017, PhosphorJS Contributors\r\n|\r\n| Distributed under the terms of the BSD 3-Clause License.\r\n|\r\n| The full license is in the file LICENSE, distributed with this software.\r\n|----------------------------------------------------------------------------*/\r\n\r\n\r\nbody.p-mod-override-cursor * {\r\n  cursor: inherit !important;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports
exports.i(__webpack_require__(237), "");
exports.i(__webpack_require__(238), "");
exports.i(__webpack_require__(239), "");
exports.i(__webpack_require__(240), "");
exports.i(__webpack_require__(241), "");
exports.i(__webpack_require__(242), "");
exports.i(__webpack_require__(243), "");
exports.i(__webpack_require__(244), "");
exports.i(__webpack_require__(245), "");

// module
exports.push([module.i, "/*-----------------------------------------------------------------------------\r\n| Copyright (c) 2014-2017, PhosphorJS Contributors\r\n|\r\n| Distributed under the terms of the BSD 3-Clause License.\r\n|\r\n| The full license is in the file LICENSE, distributed with this software.\r\n|----------------------------------------------------------------------------*/\r\n", ""]);

// exports


/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/*-----------------------------------------------------------------------------\r\n| Copyright (c) 2014-2017, PhosphorJS Contributors\r\n|\r\n| Distributed under the terms of the BSD 3-Clause License.\r\n|\r\n| The full license is in the file LICENSE, distributed with this software.\r\n|----------------------------------------------------------------------------*/\r\n\r\n\r\n.p-Widget {\r\n  box-sizing: border-box;\r\n  position: relative;\r\n  overflow: hidden;\r\n  cursor: default;\r\n}\r\n\r\n\r\n.p-Widget.p-mod-hidden {\r\n  display: none !important;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/*-----------------------------------------------------------------------------\r\n| Copyright (c) 2014-2017, PhosphorJS Contributors\r\n|\r\n| Distributed under the terms of the BSD 3-Clause License.\r\n|\r\n| The full license is in the file LICENSE, distributed with this software.\r\n|----------------------------------------------------------------------------*/\r\n\r\n\r\n.p-CommandPalette {\r\n  display: flex;\r\n  flex-direction: column;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n\r\n.p-CommandPalette-search {\r\n  flex: 0 0 auto;\r\n}\r\n\r\n\r\n.p-CommandPalette-content {\r\n  flex: 1 1 auto;\r\n  margin: 0;\r\n  padding: 0;\r\n  min-height: 0;\r\n  overflow: auto;\r\n  list-style-type: none;\r\n}\r\n\r\n\r\n.p-CommandPalette-header {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n\r\n.p-CommandPalette-itemShortcut {\r\n  float: right;\r\n}\r\n\r\n\r\n.p-CommandPalette-itemLabel {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/*-----------------------------------------------------------------------------\r\n| Copyright (c) 2014-2017, PhosphorJS Contributors\r\n|\r\n| Distributed under the terms of the BSD 3-Clause License.\r\n|\r\n| The full license is in the file LICENSE, distributed with this software.\r\n|----------------------------------------------------------------------------*/\r\n\r\n\r\n.p-DockPanel {\r\n  z-index: 0;\r\n}\r\n\r\n\r\n.p-DockPanel-widget {\r\n  z-index: 0;\r\n}\r\n\r\n\r\n.p-DockPanel-tabBar {\r\n  z-index: 1;\r\n}\r\n\r\n\r\n.p-DockPanel-handle {\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.p-DockPanel-handle.p-mod-hidden {\r\n  display: none !important;\r\n}\r\n\r\n\r\n.p-DockPanel-handle:after {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  content: '';\r\n}\r\n\r\n\r\n.p-DockPanel-handle[data-orientation='horizontal'] {\r\n  cursor: ew-resize;\r\n}\r\n\r\n\r\n.p-DockPanel-handle[data-orientation='vertical'] {\r\n  cursor: ns-resize;\r\n}\r\n\r\n\r\n.p-DockPanel-handle[data-orientation='horizontal']:after {\r\n  left: 50%;\r\n  min-width: 8px;\r\n  transform: translateX(-50%);\r\n}\r\n\r\n\r\n.p-DockPanel-handle[data-orientation='vertical']:after {\r\n  top: 50%;\r\n  min-height: 8px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n\r\n.p-DockPanel-overlay {\r\n  z-index: 3;\r\n  box-sizing: border-box;\r\n  pointer-events: none;\r\n}\r\n\r\n\r\n.p-DockPanel-overlay.p-mod-hidden {\r\n  display: none !important;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/*-----------------------------------------------------------------------------\r\n| Copyright (c) 2014-2017, PhosphorJS Contributors\r\n|\r\n| Distributed under the terms of the BSD 3-Clause License.\r\n|\r\n| The full license is in the file LICENSE, distributed with this software.\r\n|----------------------------------------------------------------------------*/\r\n\r\n\r\n.p-Menu {\r\n  z-index: 10000;\r\n  position: absolute;\r\n  white-space: nowrap;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  outline: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n\r\n.p-Menu-content {\r\n  margin: 0;\r\n  padding: 0;\r\n  display: table;\r\n  list-style-type: none;\r\n}\r\n\r\n\r\n.p-Menu-item {\r\n  display: table-row;\r\n}\r\n\r\n\r\n.p-Menu-item.p-mod-hidden,\r\n.p-Menu-item.p-mod-collapsed {\r\n  display: none !important;\r\n}\r\n\r\n\r\n.p-Menu-itemIcon,\r\n.p-Menu-itemSubmenuIcon {\r\n  display: table-cell;\r\n  text-align: center;\r\n}\r\n\r\n\r\n.p-Menu-itemLabel {\r\n  display: table-cell;\r\n  text-align: left;\r\n}\r\n\r\n\r\n.p-Menu-itemShortcut {\r\n  display: table-cell;\r\n  text-align: right;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/*-----------------------------------------------------------------------------\r\n| Copyright (c) 2014-2017, PhosphorJS Contributors\r\n|\r\n| Distributed under the terms of the BSD 3-Clause License.\r\n|\r\n| The full license is in the file LICENSE, distributed with this software.\r\n|----------------------------------------------------------------------------*/\r\n\r\n\r\n.p-MenuBar {\r\n  outline: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n\r\n.p-MenuBar-content {\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style-type: none;\r\n}\r\n\r\n\r\n.p-MenuBar-item {\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n.p-MenuBar-itemIcon,\r\n.p-MenuBar-itemLabel {\r\n  display: inline-block;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/*-----------------------------------------------------------------------------\r\n| Copyright (c) 2014-2017, PhosphorJS Contributors\r\n|\r\n| Distributed under the terms of the BSD 3-Clause License.\r\n|\r\n| The full license is in the file LICENSE, distributed with this software.\r\n|----------------------------------------------------------------------------*/\r\n\r\n\r\n.p-ScrollBar {\r\n  display: flex;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n\r\n.p-ScrollBar[data-orientation='horizontal'] {\r\n  flex-direction: row;\r\n}\r\n\r\n\r\n.p-ScrollBar[data-orientation='vertical'] {\r\n  flex-direction: column;\r\n}\r\n\r\n\r\n.p-ScrollBar-button {\r\n  box-sizing: border-box;\r\n  flex: 0 0 auto;\r\n}\r\n\r\n\r\n.p-ScrollBar-track {\r\n  box-sizing: border-box;\r\n  position: relative;\r\n  overflow: hidden;\r\n  flex: 1 1 auto;\r\n}\r\n\r\n\r\n.p-ScrollBar-thumb {\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/*-----------------------------------------------------------------------------\r\n| Copyright (c) 2014-2017, PhosphorJS Contributors\r\n|\r\n| Distributed under the terms of the BSD 3-Clause License.\r\n|\r\n| The full license is in the file LICENSE, distributed with this software.\r\n|----------------------------------------------------------------------------*/\r\n\r\n\r\n.p-SplitPanel-child {\r\n  z-index: 0;\r\n}\r\n\r\n\r\n.p-SplitPanel-handle {\r\n  z-index: 1;\r\n}\r\n\r\n\r\n.p-SplitPanel-handle.p-mod-hidden {\r\n  display: none !important;\r\n}\r\n\r\n\r\n.p-SplitPanel-handle:after {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  content: '';\r\n}\r\n\r\n\r\n.p-SplitPanel[data-orientation='horizontal'] > .p-SplitPanel-handle {\r\n  cursor: ew-resize;\r\n}\r\n\r\n\r\n.p-SplitPanel[data-orientation='vertical'] > .p-SplitPanel-handle {\r\n  cursor: ns-resize;\r\n}\r\n\r\n\r\n.p-SplitPanel[data-orientation='horizontal'] > .p-SplitPanel-handle:after {\r\n  left: 50%;\r\n  min-width: 8px;\r\n  transform: translateX(-50%);\r\n}\r\n\r\n\r\n.p-SplitPanel[data-orientation='vertical'] > .p-SplitPanel-handle:after {\r\n  top: 50%;\r\n  min-height: 8px;\r\n  transform: translateY(-50%);\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/*-----------------------------------------------------------------------------\r\n| Copyright (c) 2014-2017, PhosphorJS Contributors\r\n|\r\n| Distributed under the terms of the BSD 3-Clause License.\r\n|\r\n| The full license is in the file LICENSE, distributed with this software.\r\n|----------------------------------------------------------------------------*/\r\n\r\n\r\n.p-TabBar {\r\n  display: flex;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n\r\n.p-TabBar[data-orientation='horizontal'] {\r\n  flex-direction: row;\r\n}\r\n\r\n\r\n.p-TabBar[data-orientation='vertical'] {\r\n  flex-direction: column;\r\n}\r\n\r\n\r\n.p-TabBar-content {\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n  flex: 1 1 auto;\r\n  list-style-type: none;\r\n}\r\n\r\n\r\n.p-TabBar[data-orientation='horizontal'] > .p-TabBar-content {\r\n  flex-direction: row;\r\n}\r\n\r\n\r\n.p-TabBar[data-orientation='vertical'] > .p-TabBar-content {\r\n  flex-direction: column;\r\n}\r\n\r\n\r\n.p-TabBar-tab {\r\n  display: flex;\r\n  flex-direction: row;\r\n  box-sizing: border-box;\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n.p-TabBar-tabIcon,\r\n.p-TabBar-tabCloseIcon {\r\n  flex: 0 0 auto;\r\n}\r\n\r\n\r\n.p-TabBar-tabLabel {\r\n  flex: 1 1 auto;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n\r\n.p-TabBar-tab.p-mod-hidden {\r\n  display: none !important;\r\n}\r\n\r\n\r\n.p-TabBar.p-mod-dragging .p-TabBar-tab {\r\n  position: relative;\r\n}\r\n\r\n\r\n.p-TabBar.p-mod-dragging[data-orientation='horizontal'] .p-TabBar-tab {\r\n  left: 0;\r\n  transition: left 150ms ease;\r\n}\r\n\r\n\r\n.p-TabBar.p-mod-dragging[data-orientation='vertical'] .p-TabBar-tab {\r\n  top: 0;\r\n  transition: top 150ms ease;\r\n}\r\n\r\n\r\n.p-TabBar.p-mod-dragging .p-TabBar-tab.p-mod-dragging {\r\n  transition: none;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/*-----------------------------------------------------------------------------\r\n| Copyright (c) 2014-2017, PhosphorJS Contributors\r\n|\r\n| Distributed under the terms of the BSD 3-Clause License.\r\n|\r\n| The full license is in the file LICENSE, distributed with this software.\r\n|----------------------------------------------------------------------------*/\r\n\r\n\r\n.p-TabPanel-tabBar {\r\n  z-index: 1;\r\n}\r\n\r\n\r\n.p-TabPanel-stackedPanel {\r\n  z-index: 0;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/*-----------------------------------------------------------------------------\n| Copyright (c) 2014-2017, PhosphorJS Contributors\n|\n| Distributed under the terms of the BSD 3-Clause License.\n|\n| The full license is in the file LICENSE, distributed with this software.\n|----------------------------------------------------------------------------*/\n\n\n.p-DockPanel-overlay {\n  background: rgba(255, 255, 255, 0.6);\n  border: 1px dashed black;\n  transition-property: top, left, right, bottom;\n  transition-duration: 150ms;\n  transition-timing-function: ease;\n}\n", ""]);

// exports


/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/*-----------------------------------------------------------------------------\n| Copyright (c) 2014-2017, PhosphorJS Contributors\n|\n| Distributed under the terms of the BSD 3-Clause License.\n|\n| The full license is in the file LICENSE, distributed with this software.\n|----------------------------------------------------------------------------*/\n\n\n.p-Menu {\n  padding: 3px 0px;\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n  border: 1px solid #C0C0C0;\n  font: 12px Helvetica, Arial, sans-serif;\n  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.2);\n}\n\n\n.p-Menu-item.p-mod-active {\n  background: #E5E5E5;\n}\n\n\n.p-Menu-item.p-mod-disabled {\n  color: rgba(0, 0, 0, 0.25);\n}\n\n\n.p-Menu-itemIcon {\n  width: 21px;\n  padding: 4px 2px;\n}\n\n\n.p-Menu-itemLabel {\n  padding: 4px 35px 4px 2px;\n}\n\n\n.p-Menu-itemMnemonic {\n  text-decoration: underline;\n}\n\n\n.p-Menu-itemShortcut {\n  padding: 4px 0px;\n}\n\n\n.p-Menu-itemSubmenuIcon {\n  width: 16px;\n  padding: 4px 0px;\n}\n\n\n.p-Menu-item[data-type='separator'] > div {\n  padding: 0;\n  height: 9px;\n}\n\n\n.p-Menu-item[data-type='separator'] > div::after {\n  content: '';\n  display: block;\n  position: relative;\n  top: 4px;\n  border-top: 1px solid #DDDDDD;\n}\n\n\n.p-Menu-itemIcon::before,\n.p-Menu-itemSubmenuIcon::before {\n  font-family: FontAwesome;\n}\n\n\n.p-Menu-item.p-mod-toggled > .p-Menu-itemIcon::before {\n  content: '\\F00C';\n}\n\n\n.p-Menu-item[data-type='submenu'] > .p-Menu-itemSubmenuIcon::before {\n  content: '\\F0DA';\n}\n", ""]);

// exports


/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/*-----------------------------------------------------------------------------\n| Copyright (c) 2014-2017, PhosphorJS Contributors\n|\n| Distributed under the terms of the BSD 3-Clause License.\n|\n| The full license is in the file LICENSE, distributed with this software.\n|----------------------------------------------------------------------------*/\n\n\n.p-MenuBar {\n  padding-left: 5px;\n  background: #FAFAFA;\n  color: rgba(0, 0, 0, 0.87);\n  border-bottom: 1px solid #DDDDDD;\n  font: 13px Helvetica, Arial, sans-serif;\n}\n\n\n.p-MenuBar-menu {\n  transform: translateY(-1px);\n}\n\n\n.p-MenuBar-item {\n  padding: 4px 8px;\n  border-left: 1px solid transparent;\n  border-right: 1px solid transparent;\n}\n\n\n.p-MenuBar-item.p-mod-active {\n  background: #E5E5E5;\n}\n\n\n.p-MenuBar.p-mod-active .p-MenuBar-item.p-mod-active {\n  z-index: 10001;\n  background: white;\n  border-left: 1px solid #C0C0C0;\n  border-right: 1px solid #C0C0C0;\n  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);\n}\n", ""]);

// exports


/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/*-----------------------------------------------------------------------------\n| Copyright (c) 2014-2017, PhosphorJS Contributors\n|\n| Distributed under the terms of the BSD 3-Clause License.\n|\n| The full license is in the file LICENSE, distributed with this software.\n|----------------------------------------------------------------------------*/\n\n\n.p-TabBar {\n  min-height: 24px;\n  max-height: 24px;\n}\n\n\n.p-TabBar-content {\n  min-width: 0;\n  min-height: 0;\n  align-items: flex-end;\n  border-bottom: 1px solid #C0C0C0;\n}\n\n\n.p-TabBar-tab {\n  padding: 0px 10px;\n  background: #E5E5E5;\n  border: 1px solid #C0C0C0;\n  border-bottom: none;\n  font: 12px Helvetica, Arial, sans-serif;\n  flex: 0 1 125px;\n  min-height: 20px;\n  max-height: 20px;\n  min-width: 35px;\n  margin-left: -1px;\n  line-height: 20px;\n}\n\n\n.p-TabBar-tab.p-mod-current {\n  background: white;\n}\n\n\n.p-TabBar-tab:hover:not(.p-mod-current) {\n  background: #F0F0F0;\n}\n\n\n.p-TabBar-tab:first-child {\n  margin-left: 0;\n}\n\n\n.p-TabBar-tab.p-mod-current {\n  min-height: 23px;\n  max-height: 23px;\n  transform: translateY(1px);\n}\n\n\n.p-TabBar-tabIcon,\n.p-TabBar-tabLabel,\n.p-TabBar-tabCloseIcon {\n  display: inline-block;\n}\n\n\n.p-TabBar-tab.p-mod-closable > .p-TabBar-tabCloseIcon {\n  margin-left: 4px;\n}\n\n\n.p-TabBar-tab.p-mod-closable > .p-TabBar-tabCloseIcon:before {\n  content: '\\F00D';\n  font-family: FontAwesome;\n}\n\n\n.p-TabBar-tab.p-mod-drag-image {\n  min-height: 23px;\n  max-height: 23px;\n  min-width: 125px;\n  border: none;\n  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n  transform: translateX(-40%) translateY(-58%);\n}\n", ""]);

// exports


/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(251);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 251:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 6:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var widgets_1 = __webpack_require__(14);
var MenuBar_1 = __webpack_require__(224);
var EditorLayout_1 = __webpack_require__(231);
__webpack_require__(233);
function Main() {
    widgets_1.Widget.attach(MenuBar_1.default, document.body);
    widgets_1.Widget.attach(EditorLayout_1.default, document.body);
}
window.onload = Main;


/***/ })

},[99]);
//# sourceMappingURL=app.map