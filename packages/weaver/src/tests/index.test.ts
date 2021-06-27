import {
  isBrowser,
  weaverTheme,
  Button,
  Icon,
  BankOutlined,
  Container,
  Link,
  Row,
  Space,
  PageHeader,
  Spin,
  Markdown,
  Upload,
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
    Space,
    PageHeader,
    Spin,
    Markdown,
    Upload,
  ])('Should correctly re-export package: %s', pkg => {
    expect(pkg).toBeTruthy()
  })
})
