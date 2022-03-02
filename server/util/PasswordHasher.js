const crypto = require('crypto');

class PasswordHasher {
    static getRandomString = (length) => {
        return crypto.randomBytes(Math.ceil(length / 2))
            .toString('hex')
            .slice(0, length);
    }

    static createPasswordJSON = (password, salt) => {
        if (!salt) {
            salt = this.getRandomString(16)
        }
        const hash = crypto.createHmac('sha512', salt);
        hash.update(password);
        return JSON.stringify({
            hash: hash.digest('hex'),
            salt: salt
        });
    }

    static checkPassword = (password, passwordJSON) => {
        let salt = JSON.parse(passwordJSON).salt;
        return (passwordJSON === this.createPasswordJSON(password, salt));
    }
}

module.exports = PasswordHasher;
