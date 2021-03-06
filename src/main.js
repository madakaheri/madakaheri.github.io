import axios from 'axios'
import lodash from 'lodash'
import moment from 'moment-timezone'
window.axios = axios
window._ = lodash
window.moment = moment
moment.tz.setDefault("Asia/Tokyo")

// import Amplify, { API, graphqlOperation } from 'aws-amplify';
// import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import RootMixin from './mixins/RootMixin';
import frame from './plugins/frame';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(frame)

new Vue({
  mixins: [
    RootMixin,
  ],
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
