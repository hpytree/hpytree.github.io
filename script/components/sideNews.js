import inhead from '../util/inhead.js';
import { geturl } from '../util/url.js';

const o = {
    style:["/style/components/side-news.css"]
};

const sideNews = {
    data() {
        return {
            news: [],
            newsxhr: new XMLHttpRequest()
        };
    },
    methods: {
            isspace(s) {
                return (/^\s*$/).test(s);
            },
            ifempty() {
                let v = true;
                for (let n of this.news) {
                    if (!this.isspace(n)) {
                        v = false;
                        break;
                    }
                }
                return v;
            }
    },
    mounted() {
        const h = new inhead(o);
        h.addthem();
        this.newsxhr.open('GET', geturl('/script/components/newslist.txt'));
        this.newsxhr.onreadystatechange = () => {
            if (this.newsxhr.readyState === 4 && this.newsxhr.status === 200) {
                let rowtext = this.newsxhr.responseText;
                this.news = rowtext.split('\r\n');
            }
        };
        this.newsxhr.send();
        setInterval(() => {
            this.newsxhr.open('GET', geturl('/script/components/newslist.txt'));
            this.newsxhr.send();
        }, 5000);
    },
    template: `
<section id="side-news" class="component">
    <h1>News</h1>
    <ol v-if="!ifempty()">
        <template v-for="n in news">
            <li v-if="!isspace(n)">{{n}}</li>
        </template>
    </ol>
    <p v-else>Not any news now.</p>
</section>`
};

export default sideNews;
