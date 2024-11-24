// encryption.js

/**
 * Security and Encryption Utility
 */

const crypto = require('crypto');

// Encryption configuration
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || 'default-encryption-key'; // Set your encryption key
const IV_LENGTH = 16; // AES block size

/**
 * Encrypts the given text using AES-256-CBC
 * @param {string} text - Text to encrypt
 * @returns {string} - Encrypted text
 */
const encrypt = (text) => {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return `${iv.toString('hex')}:${encrypted}`;
};

/**
 * Decrypts the given encrypted text using AES-256-CBC
 * @param {string} encryptedText - Encrypted text to decrypt
 * @returns {string} - Decrypted text
 */
const decrypt = (encryptedText) => {
  const [ivString, encrypted] = encryptedText.split(':');
  const iv = Buffer.from(ivString, 'hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};

module.exports = {
  encrypt,
  decrypt,
};

