import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab  } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab, far )
// library.add(fontawesomeFree)
Vue.component('font-awesome-icon', FontAwesomeIcon)
