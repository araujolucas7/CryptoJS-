# CryptoJS Service

This is a simple service to encrypt and decrypt messages using CryptoJS.

## Endpoints

- `POST /encrypt`: Encrypts a message.
- `POST /decrypt`: Decrypts a message.

## Usage

### Encrypt
Send a POST request to `/encrypt` with:
```json
{
  "message": "your message",
  "key": "your secret key"
}
