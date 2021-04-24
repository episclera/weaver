import { Icon, BankOutlined } from '../index'

describe('Icon', () => {
  it('Check that default Icon is well exported', () => {
    expect(Icon).toBeDefined()
  })

  it('Check that named exports are well exported', () => {
    expect(BankOutlined).toBeDefined()
  })
})
