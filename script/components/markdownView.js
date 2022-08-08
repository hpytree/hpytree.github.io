import inhead from '../util/inhead.js';
import { geturl } from '../util/url.js'

const o = {
    style:["/style/components/markdown-view.css"]
};

const h = new inhead(o);
h.addthem();

const markdownView = {
    data() {
        return {
            text: ""
        };
    },
    props: ['src', 'type'],
    computed: {
        mdhtml() {
            const md = new markdownit();
            return md.render(this.text);
        }
    },
    mounted() {
        if (this.type == 'text') {
            this.text = this.src;
        } else if (this.type == 'url') {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', geturl(this.src));
            xhr.onreadystatechange = () => {
                this.text = xhr.responseText;
            }
            xhr.send();
        }
    },
    template: `<article class="markdown" v-html="mdhtml"></article>`
};

export default markdownView;
