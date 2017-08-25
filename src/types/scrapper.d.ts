import { Page } from 'puppeteer'

/**
 * Data return messages from API.
 */
export type TScrapperMessages = {
  from: string
  value: string
  time: string
}

/**
 * Data return discussions from API.
 */
export type TScrapperDiscussions = TScrapperMessages

/**
 * Data return notifications from API.
 */
export type TScrapperNotification = {
  messages: TScrapperMessages[]
  discussions: TScrapperDiscussions[]
}

/**
 * Data return object from API Data key.
 */
export type TSCrapperObjectData = {
  notifications: TScrapperNotification
}

/**
 * Return object from API.
 */
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
