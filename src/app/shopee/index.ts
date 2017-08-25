// import * as Puppeteer from 'puppeteer'

import Scrapper from '../../scrapper'
import { IScrapperChild, IScrapperConfig  } from '../../types/scrapper'

/**
 * Shopee Scrapper
 */
class Shopee extends Scrapper implements IScrapperChild {
  constructor () {
    const config: IScrapperConfig = {
      loginURL: 'https://shopee.co.id/'
    }
    super(config)
  }
}

export default Shopee
