// import styling
import './zero-results.scss'

// import template
import template from './zero-results.html'

export default {
  template: template,
  replace: true,
  data() {
    return {
      active: false
    }
  },
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  methods: {
    toggle(options) {
      if (options.id === this.id) {
        if (!options.results) {
          this.active = true
        } else {
          this.active = false
        }
      }
    },
  },
  events: {
    'end::ajax'(options) {
      if (options && options.id) {
        this.toggle(options)
      }
    }
  }
}
