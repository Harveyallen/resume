import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import i18n from './i18n/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'


var locales = i18n;

Vue.use(VueI18n);
Vue.config.lang = 'zh_CN';

Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  template: '<App/>',
  components: { App }
})


