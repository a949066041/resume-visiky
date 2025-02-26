import Template1 from './Template1'
import Template2 from './Template2'
import Template3 from './Template3'

export default {
  template1: Template1,
  template2: Template2,
  template3: Template3,
} as Record<string, () => React.ReactNode>
