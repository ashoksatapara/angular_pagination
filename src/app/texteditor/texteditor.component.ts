import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-texteditor',
  templateUrl: './texteditor.component.html',
  styles: []
})



export class TexteditorComponent implements OnInit {
 

editorConfig:any = [];

constructor() {
  this.editorConfig = {
    "editable": true,
    "spellcheck": true,
    "height": "100",
    "minHeight": "100",
    "width": "auto",
    "minWidth": "0",
    "translate": "yes",
    "enableToolbar": true,
    "showToolbar": true,
    "placeholder": "Enter text here...",
    "imageEndPoint": "",
    "toolbar": [
        ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
        ["fontName", "fontSize", "color"],
        ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
        ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
        ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"],
        ["link", "unlink", "image", "video"]
    ]
};
}

  ngOnInit() {
    console.log(this.editorConfig);
  }

  

 onSubmit(){
  

 }


}
