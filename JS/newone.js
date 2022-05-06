import Burrow from './burrowRun.js';
const elements={
    quanityTextBox: '.pdp-add .pdp-add-select__single-value'

}
export default class newone extends Burrow{
async changeQuantityValue(index) {
    await this.page.waitForSelector(elements.quanityTextBox);
    await this.page.click(elements.quanityTextBox);
    await this.page.click(`.pdp-add #react-select-2-option-${index}`);
  }
}