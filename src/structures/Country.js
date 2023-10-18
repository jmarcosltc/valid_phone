const { Countries } = require('../util/Constants');

class Country {

    /**
     * @param {string} name
     * @param {string} phoneNumber
     */
    constructor(name, phoneNumber) {

        if (!name || !phoneNumber) { throw new Error(`Invalid arguments. Reading \'${!name || !phoneNumber}\'.`); }

        this.name = name;
        this.phoneNumber = phoneNumber;

    }

    get formattedPhoneNumber() {
        return this.phoneNumber = this._format(this.name, this.phoneNumber);
    }

    /**
     * @param {string} name
     * @param {string} phoneNumber
     * @returns {string}
     * @private
     * @example
     * Input: 'BRAZIL', '12345678901'
     * Output: '+55123456789'
     */
    _format(name, phoneNumber) {

        name.toUpperCase();

        if (typeof name !== 'string' || typeof phoneNumber !== 'string') { throw new Error('Invalid arguments. Type of \'name\' and \'phoneNumber\' must be of string.'); }

        if (!Countries[name]) { throw new Error(`Invalid country name. The country name must be one of the following: ${Object.keys(Countries).join(', ')}`); }

        if (phoneNumber.startsWith(Countries[name].code)) { phoneNumber = phoneNumber.slice(Countries[name].code.length); }

        if (Countries[name].chars !== phoneNumber.length) { throw new Error(`Invalid phone number. The number of characters for this country's phone number must be ${Countries[name].chars}.`); }

        if (Countries[name]) {
            const { code, chars } = Countries[name];
            return code + phoneNumber.slice(0, chars);
        }
    }

}

module.exports = Country;