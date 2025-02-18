import { addDynamicIconSelectors } from '@iconify/tailwind'
import customIconJson from '../assets/custom.json'

// * render node env
export default addDynamicIconSelectors({
  iconSets: {
    custom: customIconJson,
  },
})
