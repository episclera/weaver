import { render } from 'less'
import weaverThemePluginLess from '../weaverThemePluginLess'
import weaverTheme from '../weaverTheme'

describe('weaverThemePluginLess', () => {
  it('Should return only one property value if the arg is provided', async () => {
    const lessInput = `
      body {
        background: weaverTheme('primary-color');
      }
    `
    const { css } = await render(lessInput, {
      plugins: [weaverThemePluginLess as any],
      javascriptEnabled: true,
    })

    expect(css).toMatch(`background: ${weaverTheme('primary-color')};`)
  })

  it('Should return the entire config if no args provided', async () => {
    const lessInput = `
      @mixin weaverVars {
        weaverTheme();
      }
    `
    const { css } = await render(lessInput, {
      plugins: [weaverThemePluginLess as any],
      javascriptEnabled: true,
    })

    expect(css).toMatch(`@primary-color`)
  })
})
