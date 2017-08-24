import * as Puppeteer from 'puppeteer'

import BrowserConnector from '../browser/connector'
import { IScrapperConfig } from '../types/scrapper'

class Scrapper {
  public config: IScrapperConfig

  constructor (config: IScrapperConfig) {
    this.config = Object.assign({}, this.config, config)
  }

  protected async browser (): Promise<Puppeteer.Browser> {
    const connector = await new BrowserConnector()
    const browser = await connector.browser()

    return browser
  }

  public async openLoginPage (): Promise<Puppeteer.Page> {
    const browser = await this.browser()
    const page = await browser.newPage()

    await page.goto(this.config.loginURL)
    return page
  }
}

export default Scrapper
