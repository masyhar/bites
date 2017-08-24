/**
 * Copyright Masyhar 2017 - present
 */

import Connector from './browser/connector'

(async function () {
  const connector = await new Connector()
  const browser = await connector.browser()

  const page = await browser.newPage()
  page.setViewport({
    width: 1366,
    height: 768
  })

  await page.goto('https://tokopedia.com/')
})()
