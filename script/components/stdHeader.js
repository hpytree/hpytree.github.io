import inhead from '../util/inhead.js';

const o = {
    style:["/style/components/std-header.css"],
    cdn:["https://unpkg.com/vue@next"]
};

const mylink = {
    props: ['name', 'href'],
    template: `<li><a v-bind:href="href">{{name}}</a></li>`
};

const stdHeader = {
    data() {
        return {
            links: [{
                    name: 'Repositories',
                    href: '/repositories'
                },
                {
                    name: 'About',
                    href: '/about.html'
                },
                {
                    name: 'Tools',
                    href: '/tools'
                },
                {
                    name: 'Source',
                    href: 'https://github.com/hpytree/hpytree.github.io'
                }
            ]
        };
    },
    components: {
        'mylink': mylink
    },
    mounted() {
        const h = new inhead(o);
        h.addthem();
    },
    template: `
<header id="std-header" class="component">
    <h1 id="toptitle"><a href="/">hpytree</a></h1>
        <nav id="topguide">
            <ul>
                <mylink v-for="link in links" v-bind:name="link.name" v-bind:href="link.href"></mylink>
            </ul>
        </nav>
</header>`
};

export default stdHeader;
