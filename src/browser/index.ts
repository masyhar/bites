import * as Puppeteer from 'puppeteer'
import { createLock } from '../locker'

(async function () {
  const Browser = Puppeteer.launch({
    headless: false
  })
  const browser = await Browser

  /**
   * Create new wsEndpoint lock
   */
  await createLock({
    wsEndpoint: await browser.wsEndpoint()
  })
})()
