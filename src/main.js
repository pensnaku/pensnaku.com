import Vue from 'vue';
import App from './App.vue';
import './assets/css/main.css';
import 'animate.css';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitterSquare,
  faFontAwesome,
  faGithubSquare,
  faLinkedin,
  faStackOverflow,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faTwitterSquare,
  faFontAwesome,
  faGithubSquare,
  faLinkedin,
  faStackOverflow,
  faInstagram,
  faBars,
);

Vue.config.productionTip = false;
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
