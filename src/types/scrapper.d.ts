import { Page } from 'puppeteer'

export type TScrapperMessages = {
  from: string
  value: string
  time: string
}

export type TScrapperDiscussions = TScrapperMessages

export type TScrapperNotification = {
  messages: TScrapperMessages[]
  discussions: TScrapperDiscussions[]
}

export type TSCrapperObjectData = {
  notifications: TScrapperNotification
}

export type TScrapperResult = {
  status: 'success' | 'error'
  message: string
  data?: TSCrapperObjectData
}

export interface IScrapperConfig {
  /**
   * URL page login target scraping.
   */
  loginURL: string
}

export interface IScrapperChild {
}

export interface IScrapper {
  /**
   * Function to open login page from target scrapping.
   */
  openLoginPage (): Promise<Page>

}
