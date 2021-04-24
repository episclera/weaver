import { isBrowser, Button, Icon, BankOutlined } from '../index'

describe('Weaver', () => {
  it('Check that weaver is well exported', () => {
    expect(Button).toBeDefined()
  })

  it('Check that weaver-icons is well exported', () => {
    expect(Icon).toBeDefined()
    expect(BankOutlined).toBeDefined()
  })

  it('Check that weaver-utils is well exported', () => {
    expect(isBrowser).toBeDefined()
  })
})
