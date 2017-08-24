import { Browser } from 'puppeteer'

export interface IConfig {
  url: string
}

export interface IEngine {
  browser(): Promise<Browser>
}
