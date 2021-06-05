import React from 'react'
import { weaverTheme } from '@episclera/weaver-theme'
import { render } from '@testing-library/react'
import Container from '../Container'

describe('Container', () => {
  it('Should render a container with max with equal to weaverTheme screen-xxl', () => {
    const { getByTestId } = render(<Container />)

    expect(getByTestId('container').style.maxWidth).toBe(
      weaverTheme('screen-xxl'),
    )
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
