import React from 'react'
import { render } from '@testing-library/react'
import PageHeader from '../PageHeader'

describe('PageHeader', () => {
  it('Should render the children element if provided', () => {
    const { queryByTestId } = render(
      <PageHeader>
        <div data-testid='page-header-children' />
      </PageHeader>,
    )

    expect(queryByTestId('page-header-children')).toBeTruthy()
  })

  it('Should render a page-header with padding 0 in order to not have sizing inconsistences when used with Space', () => {
    const { container } = render(<PageHeader />)

    expect(
      (container.querySelector('.ant-page-header') as HTMLDivElement).style
        .padding,
    ).toBe('0px')
  })
})
