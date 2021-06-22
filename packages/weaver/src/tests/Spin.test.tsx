import React from 'react'
import { render } from '@testing-library/react'
import Spin from '../Spin'

/**
 * Mocking Spin loading indicator icon because it fails in tests
 * because jest says that it is used outside a component for some reason
 */
jest.mock('@episclera/weaver-icons', () => ({
  LoadingOutlined: () => <span data-testid='loading-outline-indicator' />,
}))

describe('Spin', () => {
  it('Should use by default the provided LoadingOutlined icon as indicator', () => {
    const { queryByTestId } = render(<Spin />)

    expect(queryByTestId('loading-outline-indicator')).toBeTruthy()
  })

  it('Should render the children element if provided', () => {
    const { queryByTestId } = render(
      <Spin>
        <div data-testid='spin-children' />
      </Spin>,
    )

    expect(queryByTestId('spin-children')).toBeTruthy()
  })
})
