/**
 * Copyright Masyhar 2017 - present
 */

import Engine from './engine'

(async function () {
  const engine = await new Engine()
  const browser = await engine.browser()

  const page = await browser.newPage()
  await page.goto('https://tokopedia.com/')
})()
