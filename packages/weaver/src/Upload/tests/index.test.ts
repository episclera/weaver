import Upload from '../index'

describe('Upload', () => {
  it('should correctly export sub-modules', () => {
    expect(Upload.Input).toBeTruthy()
    expect(Upload.Dragger).toBeTruthy()
  })
})
