import * as Puppeteer from 'puppeteer'

import { readLock } from '../locker'
import { IEngine, IConfig } from '../types/Engine'

class Engine implements IEngine {
  public async browser () {
    const browserWSEndpoint = await readLock('wsEndpoint')
    return await Puppeteer.connect({
      browserWSEndpoint
    })
  }
}

export default Engine
