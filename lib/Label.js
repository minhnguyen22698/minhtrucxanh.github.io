import Node from './Node.js'

class Label extends Node{
    constructor(text,fontSize,fontColor){
        super();
        this._text='';
        this._fontSize='';
        this._fontColor='';
        if(text) ;
    }
    get text(){
        return this._text;
    }
    set text(val){
        this._text=val
        this.ele.innerHTML=this._text
    }
    get fontSize(){
        return this._fontSize
    }
    set fontSize(val){
        this._fontSize=val
        this.ele.style.fontSize=this._fontSize+'px'
    }
    get fontColor(){
        return this._fontColor
    }
    set fontColor(val){
        this._fontColor=val
        this.ele.fontColor=this._fontColor+'px'
    }
    
}