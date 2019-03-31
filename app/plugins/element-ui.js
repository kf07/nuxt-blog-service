import Vue from 'vue'
import Element from 'app/plugins/element-ui'
import locale from 'element-ui/lib/locale/lang/en'

export default () => {
  Vue.use(Element, { locale })
}
