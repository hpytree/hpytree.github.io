import { geturl } from '../util/url.js';

const itemsList = {
    props: {
        src: [Object, String],
        type: String,
        grade: Number
    },
    data() {
        return {
            obj: {}
        };
    },
    mounted() {
        if (!this.grade) {
            this.grade = 1;
        }
        if (this.type == 'object') {
            this.obj = this.object;
        } else if (this.type == 'json') {
             fetch(this.src).then(res => this.obj = res.json());
        }
    },
    components: {
        'he': hn,
        'items-list': itemsList
    },
    template: `
<section class="items-list">
    <hn v-bind:grade="grade" v-if="obj.title">{{title}}</hn>
    <p v-if="obj.description">{{object.description}}</p>
    <ol v-if="obj.list">
         <li v-for="l in obj.list" class="component">
             <a v-bind:href="l.href">
                 <div>{{l.title}}</div>
                 <p v-if="l.description">{.description}}</p>
             </a>
         </li>
    </ol>
    <section v-if="obj.children">
        <items-list
            v-for="child in obj.children"
            v-bind:src="child"
            v-bind:grade="grade+1"
            type="object"></items-list>
    </section>
</section>`
};

export default itemsList;
