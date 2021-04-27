import { isBrowser, Button, Icon, BankOutlined } from '../index'

// NOTE: all utils/configs are tested separately in theirs folders so no need to test here other logical things
describe('Weaver', () => {
  it.each([isBrowser, Button, Icon, BankOutlined])(
    'Should correctly re-export package: %s',
    pkg => {
      expect(pkg).toBeDefined()
    },
  )
})
