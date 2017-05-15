import { browser, by, element } from 'protractor';

export class PortfolioPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('po-root h1')).getText();
  }
}
