import React from 'react'
import { render } from '@testing-library/react'
import Preview from '../Preview'

describe('Preview', () => {
  it('Should correctly render the children markdown content', () => {
    const { container } = render(
      <Preview>
        {
          '**strong text** \n*em text* \n1. ordered item \n2. ordered item \n- unordered item \n- unordered item \n[link](www.test.com) \n >quote'
        }
      </Preview>,
    )

    const containerHtmlContent = (
      container.querySelector('.markdown-preview') as HTMLDivElement
    ).innerHTML

    expect(containerHtmlContent).toMatch('<strong>strong text</strong>')
    expect(containerHtmlContent).toMatch('<i>em text</i>')
    expect(containerHtmlContent).toMatch('<li>ordered item</li>')
    expect(containerHtmlContent).toMatch('<li>unordered item</li>')
    expect(containerHtmlContent).toMatch(
      /<a .* target="_blank".* href="www.test.com".*>link<\/a>/g,
    )
  })

  it('Should not render not allowed children markdown content', () => {
    const { container } = render(
      <Preview>![test image text](www.test-image-link.com)</Preview>,
    )

    expect(
      (container.querySelector('.markdown-preview') as HTMLDivElement)
        .innerHTML,
    ).not.toMatch('test image text')
    expect(
      (container.querySelector('.markdown-preview') as HTMLDivElement)
        .innerHTML,
    ).not.toMatch('www.test-image-link.com')
  })

  it('Should not render html elements due to security considerations', () => {
    const { container } = render(
      <Preview>
        {'<div><img src="www.test.com" /><script>test script</script></div>'}
      </Preview>,
    )

    expect(
      (container.querySelector('.markdown-preview') as HTMLDivElement)
        .innerHTML,
    ).not.toMatch('script')
    expect(
      (container.querySelector('.markdown-preview') as HTMLDivElement)
        .innerHTML,
    ).not.toMatch('div')
    expect(
      (container.querySelector('.markdown-preview') as HTMLDivElement)
        .innerHTML,
    ).not.toMatch('img')
  })
})
