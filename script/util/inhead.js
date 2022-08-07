let evaluator = new XPathEvaluator();

class inhead {
    constructor(o) {
        if (!o) {
            return;
        }
        this.hobj = o;
        this.xpathe = {cdn:[],style:[]};
        if ('cdn' in this.hobj) {
            for (let c of this.hobj.cdn) {
                this.xpathe.cdn.push(evaluator.createExpression(`script[@src="${c}"]`));
            }
        }
        else {
            this.hobj.cdn = [];
        }
        if ('style' in this.hobj) {
            for (let s of this.hobj.style) {
                this.xpathe.style.push(evaluator.createExpression(`link[@rel="stylesheet"][@href="${s}"]`));
            }
        }
        else {
            this.hobj.style = [];
        }
    }
    addthem() {
        let elems = [];
        for (let i = 0; i < this.hobj.cdn.length; i++) {
            if (!this.xpathe.cdn[i].evaluate(document.head).iterateNext()) {
                let e = document.createElement('script');
                e.src = this.hobj.cdn[i];
                elems.push(e);
                console.log('ahaha\n');
            }
        }
        for (let i = 0; i < this.hobj.style.length; i++) {
            if (!this.xpathe.style[i].evaluate(document.head).iterateNext()) {
                let e = document.createElement('link');
                e.rel = "stylesheet";
                e.href = this.hobj.style[i];
                elems.push(e);
            }
        }
        for (let e of elems) {
            document.head.appendChild(e);
        }
    }
}

export default inhead;
