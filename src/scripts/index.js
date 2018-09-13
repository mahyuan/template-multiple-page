import Vue from 'vue';
import template from './components/index/tmpl';
let style = require('./components/index/style.less');

module.exports.createApp = function () {
  return new Vue({
    template,
    data: {
      msg: 'hhhh',
      style,
    },
    components: {

    },
    methods: {
      show() {
        console.log('hello')
      }
    },
    mounted() {
      console.log('mounted start!');
      this.show();
    },
  })
};

// if (typeof window !== 'undefined') {
//   const sd = serverData();
//   window.app = exports.createApp();
//   app.mount('#app');
// };


