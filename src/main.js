import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import Recipes from './data/recipes'

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  data () {
    return {
      recipes: Recipes
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')
