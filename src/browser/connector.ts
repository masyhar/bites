import * as Puppeteer from 'puppeteer'

import { readLock } from '../locker'
import { IBrowserConnector, IConfig } from '../types/browser/connector'

/**
 * Browser Connector
 */
class BrowserConnector implements IBrowserConnector {
  /**
   * Connect and get browser
   *
   * @return Promise<Browser>
   */
  public async browser () {
    // Get wsEndpoint value from lock.
    const browserWSEndpoint = await readLock('wsEndpoint')

    return await Puppeteer.connect({
      browserWSEndpoint
    })
  }
}

export default BrowserConnector
