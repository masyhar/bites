// import * as Puppeteer from 'puppeteer'

import Scrapper from '../../scrapper'
import { IScrapperChild, IScrapperConfig  } from '../../types/scrapper'

/**
 * Tokopedia Scrapper
 */
class Tokopedia extends Scrapper implements IScrapperChild {
  constructor () {
    const config: IScrapperConfig = {
      loginURL: 'https://tokopedia.com/login.pl'
    }
    super(config)
  }
}

export default Tokopedia
