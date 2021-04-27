import { Icon, BankOutlined } from '../index'

// NOTE: all utils/configs are tested separately in theirs folders so no need to test here other logical things
describe('Icon', () => {
  it.each([Icon, BankOutlined])(
    'Should correctly re-export package: %s',
    pkg => {
      expect(pkg).toBeDefined()
    },
  )
})
