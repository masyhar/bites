import * as Puppeteer from 'puppeteer'

import { createLock } from '../locker'
import config from '../config'

(async function () {
  const Browser = Puppeteer.launch({
    headless: false,
    args: [
      `--remote-debugging-port=${config.remoteDebuggingPort}`
    ]
  })
  const browser = await Browser

  /**
   * Create new wsEndpoint lock
   */
  await createLock({
    wsEndpoint: await browser.wsEndpoint()
  })
})()
