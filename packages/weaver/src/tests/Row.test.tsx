import React from 'react'
import { render } from '@testing-library/react'
import Row from '../Row'

beforeAll(() => {
  // Note: using mock matchMedia because row uses this functionality for responsive stuff
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
})

describe('Row', () => {
  it('Should render the children element', () => {
    const { getByTestId } = render(
      <Row>
        <div data-testid='row-children' />
      </Row>,
    )

    expect(getByTestId('row-children')).toBeTruthy()
  })
})
