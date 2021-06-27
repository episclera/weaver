import React from 'react'
import { render } from '@testing-library/react'
import Dragger from '../Dragger'

/**
 * Mocking dragger icon because it fails in tests
 * because jest says that it is used outside a component for some reason
 */
jest.mock('@episclera/weaver-icons', () => ({
  FolderOpenOutlined: () => <span data-testid='upload-dragger-icon' />,
}))

describe('Dragger', () => {
  it('Should correctly render the children element', () => {
    const { getByTestId } = render(
      <Dragger>
        <div data-testid='upload-dragger-children' />
      </Dragger>,
    )

    expect(getByTestId('upload-dragger-children')).toBeTruthy()
  })

  it('Should use by default the provided FolderOpenOutlined icon as box icon if no other icon provided', () => {
    const { queryByTestId } = render(<Dragger />)

    expect(queryByTestId('upload-dragger-icon')).toBeTruthy()
  })

  it('Should use the provided icon as box icon', () => {
    const { queryByTestId } = render(
      <Dragger icon={<span data-testid='custom-upload-dragger-icon' />} />,
    )

    expect(queryByTestId('custom-upload-dragger-icon')).toBeTruthy()
  })
})
