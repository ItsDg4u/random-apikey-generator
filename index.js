const crypto = require('crypto');
const base64 = require('base-64');

function generateRandomPassword(length = 36) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  const randomBytes = crypto.randomBytes(length);
  const password = Array.from(randomBytes)
    .map(byte => charset[byte % charset.length])
    .join('');
  return base64.encode(password);
}

module.exports = generateRandomPassword;