/* eslint-disable class-methods-use-this */
import Page from './page';
import TestConfigLib from '../lib/testConfigLib';

const elements = {
  withPillowInsertText: '.pdp-options-checkbox > .pdp-options-checkbox-label',
  quantitySelector: '.pdp-add > .pdp-add-select',
  strikeThroughPrice: '.price-wrapper .strikethrough',
  price: '.price-wrapper .price',
  increaseQuantity: '.pdp-quantity.increase',
  quantityNumber: '.pdp-add .pdp-add-select__single-value',
  fillerModifierSelectors: '.pdp-options.pillow-insert',
  fillersModifierSelectors: '.pdp-options.pillow-inserts',
  withPillowInsertTooltip: '.pdp-options-wrapper .modal-icon',
  toolTipText: '.pdp-options-checkbox-wrapper .modal-msg > h4',
  pillowInsertsCheckBox: '.pdp .pdp-options-checkbox.active',
  quanityTextBox: '.pdp-add .pdp-add-select__single-value',
  pillowInsertAddonPrice: '.pdp-options-wrapper .pdp-options-checkbox-price',
};
const throwUrls = {
  wovenOat: 'accessories/woven-throw?sku=ALRTW-WVTW-Z002-OA',
  wovenFog: 'accessories/woven-throw?sku=ALRTW-WVTW-Z002-FG',
};
const pillowUrls = {
  fauxFurPillowCover:'accessories/faux-fur-pillow-cover?sku=ALRPL-SQ1009IV0',
  pixel:'accessories/pixel-pillow-cover?sku=ALRPL-SQ-2022',
  dashed: 'accessories/dashed-pillow-cover?sku=ALRPL-SQ-2021',
  honeyInterKnit: 'accessories/honey-interknit-jersey-pillow-cover?sku=ALRPL-SQ-2029',
  portal: 'accessories/portal-pillow-cover-dark?sku=ALRPL-SQ9125SL0',
  cathode: 'accessories/cathode-pillow-cover?sku=ALRPL-SQ-2027',
  gambit: 'accessories/gambit-pillow-cover?sku=ALRPL-SQ-2028',
  simpleStripe: 'accessories/simple-stripe-pillow-cover?sku=ALRPL-SQ-2025-BL0',
  pewterInterknit: 'accessories/pewter-interknit-jersey-pillow-cover?sku=ALRPL-SQ0618GR0',
};
const bundleUrls = {
  smoke: 'accessories/smoke-blanket-set?sku=PT-SKB-0',
  oat: 'accessories/oat-blanket-set?sku=PT-OTB-0',
  fog: 'accessories/fog-blanket-set?sku=PT-FGB-0',
  portals: 'accessories/portals-fog-set?sku=PT-FOG-0',
};

export default class AccessoriesPage extends Page {
  async getARandomThrowURl() {
    const throwUrlsArray = Object.values(throwUrls);
    const randomUrlNumber = Math.floor((Math.random() * throwUrlsArray.length));
    return throwUrlsArray[randomUrlNumber];
  }

  async getARandomPillowURl() {
    const pillowUrlsArray = Object.values(pillowUrls);
    const randomUrlNumber = Math.floor((Math.random() * pillowUrlsArray.length));
    return pillowUrlsArray[randomUrlNumber];
  }

  async isQuantitySelectorVisible() {
    return await this.isElementVisible(elements.quantitySelector);
  }

  async clickWithPillowInsertCheckbox() {
    await this.waitAndClick(elements.withPillowInsertText);
  }

  async clickIncreaseQuantityIcon() {
    await this.waitAndClick(elements.increaseQuantity);
  }

  async getQuantityNumber() {
    return await this.getElementInnerText(elements.quantityNumber);
  }

  async getStrikeThroughPrice() {
    return await this.getElementInnerText(elements.strikeThroughPrice);
  }

  async getSalePrice() {
    return await this.getElementInnerText(elements.price);
  }

  async areFillersSelectorsVisible() {
    return await this.isElementVisible(elements.fillersModifierSelectors);
  }

  async areFillerSelectorsVisible() {
    return await this.isElementVisible(elements.fillerModifierSelectors);
  }

  async getNumberofFillerSelectors() {
    return await this.getNumberOfItems(elements.fillerModifierSelectors);
  }

  async getNumberofFillersSelectors() {
    return await this.getNumberOfItems(elements.fillersModifierSelectors);
  }

  async getWithPillowInsertTooltipTitleText() {
    await this.waitAndClick(elements.withPillowInsertTooltip);
    return await this.getElementInnerText(elements.toolTipText);
  }

  async getPillowNameFromWithPillowInsertTooltipTitleText() {
    const text = await this.getWithPillowInsertTooltipTitleText();
    return text.split(' ')[0];
  }

  async getARandomBundleURl() {
    const bundleUrlsArray = Object.values(bundleUrls);
    const randomUrlNumber = Math.floor((Math.random() * bundleUrlsArray.length));
    return bundleUrlsArray[randomUrlNumber];
  }

  async isWithPillowInsertsCheckboxChecked() {
    return await this.isCheckboxChecked(elements.pillowInsertsCheckBox, TestConfigLib.waitTimeoutMedium);
  }

  async changeQuantityValue(index) {
    await this.page.waitForSelector(elements.quanityTextBox);
    await this.page.click(elements.quanityTextBox);
    await this.page.click(`.pdp-add #react-select-2-option-${index}`);
  }

  async getPillowInsertAddonPrice() {
    let price = await this.getElementInnerText(elements.pillowInsertAddonPrice);
    price = price.split(' ')[1];
    return price;
  }
}
