/**
 * Copyright Masyhar 2017 - present
 */

import Engine from './engine'

(async function () {
  const engine = await new Engine()
  const browser = await engine.browser()

  const page = await browser.newPage()
  page.setViewport({
    width: 1366,
    height: 768
  })

  await page.goto('https://tokopedia.com/')
})()
