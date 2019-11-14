import utils from '../utils'

describe('Launch', function () {
  beforeEach(utils.beforeEach)
  afterEach(utils.afterEach)

  it('shows the proper application title', function () {
    const app = this.app
    console.log('test app.client:', app.client)
    console.log('test app.electron:', app.electron)
    console.log('test app.browserWindow:', app.browserWindow)
    console.log('test app.webContents:', app.webContents)
    console.log('test app.mainProcess:', app.mainProcess)
    console.log('test app.rendererProcess:', app.rendererProcess)
    return this.app.client.getTitle()
      .then(title => {
        expect(title).to.equal('electron-vue-spectron')
      })
  })
})
