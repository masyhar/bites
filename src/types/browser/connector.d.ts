import { Browser } from 'puppeteer'

export interface IConfig {
  url: string
}

export interface IBrowserConnector {
  browser(): Promise<Browser>
}
