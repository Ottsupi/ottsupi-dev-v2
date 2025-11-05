import type { Alpine } from 'alpinejs'
import collapse from '@alpinejs/collapse'
import resize from '@alpinejs/resize'

export default (Alpine: Alpine) => {
    Alpine.plugin(collapse)
    Alpine.plugin(resize)
}
