import * as Puppeteer from 'puppeteer'

import BrowserConnector from '../browser/connector'
import { IScrapper, IScrapperConfig } from '../types/scrapper'

class Scrapper implements IScrapper {
  public config: IScrapperConfig

  constructor (config: IScrapperConfig) {
    this.config = Object.assign({}, this.config, config)
  }

  public async login (): Promise<Puppeteer.Page> {
    const browser = await this.browser()
    const page = await browser.newPage()

    await page.goto(this.config.loginURL)

    return await page
  }

  protected async browser (): Promise<Puppeteer.Browser> {
    const connector = await new BrowserConnector()
    const browser = await connector.browser()

    return browser
  }

}

export default Scrapper
