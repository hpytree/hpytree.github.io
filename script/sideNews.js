const sideNews = {
    data() {
        return {
            news: [],
            newsxhr: new XMLHttpRequest()
        };
    },
    methods: {
            isspace(ss) {
                let v = true;
                for (let s of ss) {
                    v = s in [' ', '\t', '\r', '\n'];
                    if (!v) {
                        break;
                    }
                }
                return v;
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
        this.newsxhr.open('GET', 'https://hpytree.github.io/script/newslist.txt');
        this.newsxhr.onreadystatechange = () => {
            if (this.newsxhr.readyState === 4 && this.newsxhr.status === 200) {
                this.news = this.newsxhr.responseText.split('\n');
            }
        };
        setInterval(() => {
            this.newsxhr.send();
        }, 5000);
    },
    template: `
<section id="side-news">
    <h1>News</h1>
        <ol v-if="!ifempty()">
            <li v-for="n in news">{{n}}</li>
        </ol>
    <p v-else>Not any news now.</p>
</section>`
};

export default sideNews;
