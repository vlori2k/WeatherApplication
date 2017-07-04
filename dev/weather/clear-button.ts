import {Component, View, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'clearButton',

})
@View({
    template: `<button>{{clearButton}}</button>`

})

export class clearButton {      

    @Input() label: string;
    @Output() click = new EventEmitter();   

    setText(newName: string) {
        this.label = newName;            
    }
}