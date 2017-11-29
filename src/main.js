import Vue from 'vue'
import App from './App.vue'
import VueMasonry from './vue-masonry-css'

Vue.use(VueMasonry)


new Vue({
  el: '#app',
  render: function (createElement) {
    return createElement(App);
  },
})
