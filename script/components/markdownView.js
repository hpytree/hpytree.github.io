import inhead from '../util/inhead.js';
import { geturl } from '../util/url.js'

const o = {
    style:["/style/components/markdown-view.css"]
};

const markdownView = {
    data() {
        return {
            text: "",
            md: new markdownit()
        };
    },
    props: ['src', 'type'],
    computed: {
        mdhtml() {
            return this.md.render(this.text);
        }
    },
    mounted() {
        const h = new inhead(o);
        h.addthem();
        if (this.type == 'text') {
            this.text = this.src;
        } else if (this.type == 'url') {
            fetch(geturl(this.src)).then(res => res.text()).then(t => this.text = t);
        }
    },
    template: `<article class="markdown" v-html="mdhtml"></article>`
};

export default markdownView;
