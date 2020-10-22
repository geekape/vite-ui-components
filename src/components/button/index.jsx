import { ref, reactive, computed, watch } from 'vue'
import './index'

export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      validator(value) {
        return ['default', 'primary', 'info', 'warning', 'danger'].indexOf(value)
      }
    },
  },
  setup() {
    const state = reactive({
      count: 0
    })

    function increase() {
      state.count++
    }

    return () => (
      <button onClick={increase}>{state.count}</button>
    )
  }
}
