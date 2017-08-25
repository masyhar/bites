import * as Puppeteer from 'puppeteer'

import Scrapper from '../../scrapper'
import { IScrapperChild, IScrapperConfig } from '../../types/scrapper'

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

  public async login (): Promise<Puppeteer.Page> {
    try {
      const page = await super.login()
      const some = await page.evaluate(async () => {
      //   const popup = await document.querySelector('.shopee-popup')
      //   if (popup) {
      //     document.removeChild(popup)
      //   }

      //   const navbarLinks = document.querySelector('.navbar__links')
      //   if (navbarLinks) {
      //     const navLinks = navbarLinks.querySelectorAll('li')
      //     // Search for button login
      //     let btnPopupModal: HTMLLIElement | undefined
      //     navLinks.forEach(item => {
      //       if (item.textContent === 'Login') {
      //         btnPopupModal = item
      //       }
      //     })

      //     if (btnPopupModal) {
      //       btnPopupModal.click()
      //     }

      //     return btnPopupModal && btnPopupModal.innerHTML
      //   }

        return false
      })

      console.log(some)
      return await page
    } catch (e) {
      throw new Error(e)
    }
  }
}

export default Shopee
