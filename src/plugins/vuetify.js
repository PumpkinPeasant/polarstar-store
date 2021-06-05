import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import ru from 'vuetify/src/locale/ru.ts';

Vue.use(Vuetify);

const options = {
    theme: {
        theme: {
            options: { customProperties: true },
        },
    },
    lang: {
        current: ru
    },
    icons: {
        iconfont: 'mdi'
    }
}

export default new Vuetify({
    ...options
});
