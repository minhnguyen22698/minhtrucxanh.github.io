import Node from '../lib/Node.js'
import { Sprite } from '../lib/Sprite.js';
import { Label } from '../lib/Label.js'
var listClick = [];
var parentNode = [];

export class Card extends Node {
    constructor(src, index, value) {
        super()
        this._initElement(src)
        this._src = 'testing'
        this._index = '';
        this._value = '';
        this._score = 10000;
        if (index) this.index = index
        if (value) this.value = value
        this._width = 50;
        this._height = 50;
    }
    _initElement(src) {
        super._initElement();
        this._initImage(src);
        this._initCover();
        // this._initScore();
    }
    get src() {
        return this._src
    }
    set src(val) {
        this._src = val
    }
    get index() {
        return this._index
    }
    set index(val) {
        this._index = val
    }
    get index() {
        return this._index
    }
    set value(val) {
        this._value = val
        this.ele.value = val
    }
    get score() {
        return this._score
    }
    set score(val) {
        this._score = val
    }
    _initCover() {
        var label = new Label(this.index)
        label.setText = this.index
        this.addChild(label)
        var cover = new Sprite('./img/cover.jpg')
        cover.width = 100
        cover.height = 100
        cover.x = 100;
        cover.y = 100;
        this.addChild(cover);
        cover.on("mousedown", () => this.onClickCard(cover));
    }
    _initScore() {
        var label = new Label('Score : ', 30, 'red')
        label.setText = "Score: "
        this.addChild(label)
    }
    _initImage(src) {
        // var cover = new Sprite(this.src)
        var img = new Sprite(src)
        img.width = 100;
        img.height = 100;
        img.x = 100;
        img.y = 100;
        this.addChild(img)
    }
    
    onClickCard(cover) {
        // if (listClick.length < 2) {
        cover.active = false;
        parentNode.push(this);
        listClick.push(cover);
        if (parentNode.length == 2) {
            if (parentNode[0]._value === parentNode[1]._value) {
                setTimeout(() => {
                    parentNode[0].active = false;
                    parentNode[1].active = false;
                    var score = this.score + 1000
                    this.setScore(score)
                    parentNode = []; listClick = []
                }, 750);
            } else {
                setTimeout(() => {
                    listClick[0].active = true;
                    listClick[1].active = true;
                    this.score=500
                    parentNode = []; listClick = []
                }, 750);
            }
            console.log(this.score)
        }
    }


}