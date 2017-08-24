// import * as Puppeteer from 'puppeteer'

import Scrapper from '../../scrapper'
import { IScrapperChild, IScrapperConfig  } from '../../types/scrapper'

/**
 * Bukalapak Scrapper
 */
class Bukalapak extends Scrapper implements IScrapperChild {
  constructor () {
    const config: IScrapperConfig = {
      loginURL: 'https://www.bukalapak.com/login'
    }
    super(config)
  }
}

export default Bukalapak
