import { Widget } from '@phosphor/widgets';
class BaseWidget extends Widget {
   static createNode() : HTMLElement    {
        let node = document.createElement('div');
        let content = document.createElement('div');
        content.style.background = 'blue';
        node.appendChild(content);
        return node;
    }
    constructor(name: string) {        
        super({node : BaseWidget.createNode()});
        this.title.label = name;
        this.title.closable = false;
        this.title.caption = `Long description for: ${name}`;
        this.addClass(name.toLowerCase());
        this.addClass('content');
    }

    getContentNode() : HTMLDivElement{
        return this.node.firstChild as HTMLDivElement;
    }
}

export default BaseWidget;