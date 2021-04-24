import React from 'react'
import { render } from '@testing-library/react'
import Icon, { BankOutlined } from '../index'

describe('Icon', () => {
  it('Check that default Icon is well exported', () => {
    const { getByTestId } = render(
      <Icon component={() => <svg />} data-testid='icon' />,
    )
    expect(getByTestId('icon')).toBeDefined()
  })

  it('Check that named exports are well exported', () => {
    const { getByTestId } = render(<BankOutlined data-testid='icon' />)
    expect(getByTestId('icon')).toBeDefined()
  })
})
