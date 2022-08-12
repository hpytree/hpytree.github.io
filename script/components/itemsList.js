import { geturl } from '../util/url.js';
import inhead from '../util/inhead.js'

const o = {
    style: ["/style/components/items-list.css"]
};

const itemsList = {
    props: {
        src: [Object, String],
        type: String
    },
    data() {
        return {
            obj: {}
        };
    },
    mounted() {
        const h = new inhead(o);
        h.addthem();
        if (this.type == 'object') {
            this.obj = this.object;
        } else if (this.type == 'json') {
             fetch(geturl(this.src)).then(res => res.json()).then(obj => this.obj = obj);
        }
    },
    template: `
<section class="items-list">
    <h1 v-if="obj.title">{{obj.title}}</h1>
    <p v-if="obj.description">{{obj.description}}</p>
    <ul v-if="obj.list">
         <li v-for="l in obj.list" class="component">
             <a v-bind:href="l.href">
                 <h2>{{l.title}}</h2>
                 <p v-if="l.description">{{l.description}}</p>
             </a>
         </li>
    </ul>
</section>`
};

export default itemsList;
