import stdHeader from './components/stdHeader.js';
import sideNews from './components/sideNews.js';
import markdownView from './components/markdownView.js';
import itemsList from './components/itemsList.js'
import inhead from './util/inhead.js';

const o = {
    style:["/style/main.css"]
};

const appr = {
    mounted() {
        const h = new inhead(o);
        h.addthem();
    },
    components: {
        'std-header': stdHeader,
        'side-news': sideNews,
        'markdown-view':markdownView,
        'items-list': itemsList
    }
};

let app = Vue.createApp(appr);
app.mount('#mainapp');

export default app;
