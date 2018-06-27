// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Appfairy from 'appfairy';
import Vue from 'vue';
import App from './app';

Vue.config.productionTip = false;

Vue.filter('hash', (value) => {
  return new Appfairy.Reference(value);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App />',
  components: { App }
});
