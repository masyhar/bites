// import * as Puppeteer from 'puppeteer'

import Scrapper from '../../scrapper'
import { IScrapperChild, IScrapperConfig  } from '../../types/scrapper'

class Tokopedia extends Scrapper implements IScrapperChild {
  public config: IScrapperConfig

  constructor () {
    const config = {
      loginURL: 'https://tokopedia.com/login.pl'
    }
    super(config)
  }
}

export default Tokopedia
