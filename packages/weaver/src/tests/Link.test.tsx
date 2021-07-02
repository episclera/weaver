import React from 'react'
import { render } from '@testing-library/react'
import Link from '../Link'

describe('Link', () => {
  it('Should pass full href to the anchor element', () => {
    const { getByTestId } = render(<Link href='/test-path' />)

    expect((getByTestId('link') as HTMLAnchorElement).href).toBe(
      'http://localhost/test-path',
    )
  })

  it('Should render the children element inside an anchor element', () => {
    const { container } = render(
      <Link href='/'>
        <div data-testid='link-children' />
      </Link>,
    )

    expect(
      container.querySelector('a > div[data-testid="link-children"]'),
    ).toBeTruthy()
  })

  it('Should pass className to anchor element', () => {
    const { getByTestId } = render(
      <Link href='/' typographyLinkProps={{ className: 'test-class' }} />,
    )

    expect((getByTestId('link') as HTMLAnchorElement).classList).toContain(
      'test-class',
    )
  })
})
