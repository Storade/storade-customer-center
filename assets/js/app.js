window.Vue = require('vue');
import Vue from 'vue';
import ElementUI from 'element-ui';
import Axios from "axios";


Vue.prototype.rest = Axios.create({
    validateStatus: function (status) {
        return status >= 200 && status < 300; // default
    },
    responseType: 'json',
});

Vue.use(ElementUI);

Vue.component('navbar', require('../components/navbar').default);
