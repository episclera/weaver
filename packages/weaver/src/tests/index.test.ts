import {
  isBrowser,
  weaverTheme,
  Button,
  Icon,
  BankOutlined,
  Container,
  Row,
  Link,
} from '../index'

// NOTE: all utils/configs are tested separately in theirs folders so no need to test here other logical things
describe('Weaver', () => {
  it.each([
    isBrowser,
    weaverTheme,
    Button,
    Icon,
    BankOutlined,
    Container,
    Row,
    Link,
  ])('Should correctly re-export package: %s', pkg => {
    expect(pkg).toBeTruthy()
  })
})
