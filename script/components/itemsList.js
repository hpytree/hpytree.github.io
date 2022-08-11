import { geturl } from '../util/url.js';

const itemsList = {
    props: {
        src: [Object, String],
        type: String
    },
    data() {
        return {
            obj: {},
            grade: 1
        };
    },
    mounted() {
        if (this.type == 'object') {
            this.obj = this.object;
        } else if (this.type == 'json') {
             fetch(this.src).then(res => this.obj = res.json());
        }
    },
    methods: {
        
    },
    template: `
<section class="items-list">
    <hn v-bind:grade="grade" v-if="obj.title">{{title}}</hn>
    <p v-if="obj.description">{{object.description}}</p>
    <ol v-if="obj.list">
         <li v-for="l in obj.list">
             <a v-bind:href="l.href">{{l.title}}</a>
             <p v-if="l.description">{{l.description}}</p>
         </li>
    </ol>
</section>`
};

export default itemsList;
