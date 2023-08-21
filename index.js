const crypto = require('crypto');

function generateRandomPassword(length = 36) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  const randomBytes = crypto.randomBytes(length);
  const password = Array.from(randomBytes)
    .map(byte => charset[byte % charset.length])
    .join('');
  return Buffer.from(password).toString('base64');
}

module.exports = generateRandomPassword;