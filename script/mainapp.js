import stdHeader from './stdHeader.js';
import sideNews from './sideNews.js';

const app = {
    components: {
        'std-header': stdHeader,
        'side-news': sideNews
    }
};

let mainapp = Vue.createApp(app);
mainapp.mount('#mainapp');

export default mainapp;