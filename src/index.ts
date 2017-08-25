/**
 * Copyright Masyhar 2017 - present
 */

import Tokopedia from './app/tokopedia'

(async function () {
  const tokopedia = await new Tokopedia()
  await tokopedia.login()
})()
