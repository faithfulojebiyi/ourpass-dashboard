import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#1BBC86',
        secondary: '#26a69a',
        third: '#FFFFFF',
        accent: '#8FC461',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        background: '#F7F7F7',
        card: '#FF9803',
        fab: '#1dc254',
        loginbg: '#E4F7F2',
        cardlight: '#FFF3E1',
        redlight: '#FEE9E7'
      }
    }
  }
})
