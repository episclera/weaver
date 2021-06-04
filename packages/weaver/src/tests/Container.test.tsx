import React from 'react'
import { render } from '@testing-library/react'
import Container from '../Container'

describe('Container', () => {
  it('Should have only .container TW class if no other classNames provided', () => {
    const { getByTestId } = render(<Container>content</Container>)

    expect(getByTestId('container').classList).toContain('container')
    expect(getByTestId('container').classList).toHaveLength(1)
  })

  it('Should have .container class and other provided classNames', () => {
    const { getByTestId } = render(
      <Container className='test-class'>content</Container>,
    )

    expect(getByTestId('container').classList).toContain('container')
    expect(getByTestId('container').classList).toContain('test-class')
    expect(getByTestId('container').classList).toHaveLength(2)
  })

  it('Should render the children element', () => {
    const { getByTestId } = render(
      <Container>
        <div data-testid='container-children' />
      </Container>,
    )

    expect(getByTestId('container-children')).toBeTruthy()
  })
})
