import toNumber from '../toNumber'

describe('toNumber', () => {
  it('should transform a string number to number', () => {
    expect(toNumber('1')).toEqual(1)
  })
})
