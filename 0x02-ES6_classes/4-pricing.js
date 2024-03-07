import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') throw new TypeError('Amount must be a number');
    this._amount = amount;
    if (currency instanceof Currency) {
      this._currency = currency;
    } else throw new TypeError('Currency must be an instance of Currency class');
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount !== 'number') throw new TypeError('Amount must be a number');
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else throw new TypeError('Currency must be an instance of Currency class');
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') throw new TypeError('Amount and ConversionRate must be a number');
    return amount * conversionRate;
  }
}

export default Pricing;
