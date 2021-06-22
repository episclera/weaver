import React from 'react'
import { render } from '@testing-library/react'
import Space from '../Space'

describe('Space', () => {
  it('Should render the children element and wrap it in space specific class', () => {
    const { getByTestId } = render(
      <Space>
        <div data-testid='space-children' />
      </Space>,
    )

    expect(getByTestId('space-children')).toBeTruthy()
    expect(
      (getByTestId('space-children').parentElement as HTMLDivElement).classList,
    ).toContain('ant-space-item')
  })

  it('Should render by default a space with direction vertical', () => {
    const { getByTestId } = render(
      <Space>
        <div />
      </Space>,
    )

    expect(getByTestId('space')).toBeTruthy()
    expect(getByTestId('space').classList).toContain('ant-space-vertical')
  })

  it('Should render a space with width 100% in order to avoid bugs with parent overlap', () => {
    const { getByTestId } = render(
      <Space>
        <div />
      </Space>,
    )

    expect(getByTestId('space').style.width).toBe('100%')
  })

  it('Should render by default each non last child with size large', () => {
    const { getByTestId } = render(
      <Space>
        <div />
        <div />
      </Space>,
    )

    expect(getByTestId('space')).toBeTruthy()
    expect(
      (
        getByTestId('space').querySelector(
          '.ant-space-item:first-of-type',
        ) as HTMLDivElement
      ).style.marginBottom,
    ).toBe('24px')
    expect(
      (
        getByTestId('space').querySelector(
          '.ant-space-item:last-of-type',
        ) as HTMLDivElement
      ).style.marginBottom,
    ).toBe('')
  })
})
