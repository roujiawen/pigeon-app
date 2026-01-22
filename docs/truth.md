# Pigeon App - Truth Document

This document serves as the single source of truth for the Pigeon app's architecture.

## Schema

### Users
- `id`: UUID (primary key)
- `created_at`: timestamp
- `public_key`: text (X25519 public key, base64 encoded)

### Messages
- `id`: UUID (primary key)
- `created_at`: timestamp
- `sender_id`: UUID (foreign key -> users.id)
- `recipient_id`: UUID (foreign key -> users.id)
- `encrypted_payload`: text (encrypted message, base64 encoded)
- `nonce`: text (encryption nonce, base64 encoded)

## Message Types

| Type | Description |
|------|-------------|
| `text` | Plain text message |
| `request` | Contact request |
| `accept` | Contact request acceptance |

### Message Envelope Format

```json
{
  "type": "text | request | accept",
  "payload": "...",
  "timestamp": 1234567890
}
```

## Crypto

### Key Exchange
- Algorithm: X25519 (Curve25519 Diffie-Hellman)
- Keys generated client-side and stored securely on device

### Message Encryption
- Algorithm: XChaCha20-Poly1305
- Each message uses a unique random nonce (24 bytes)
- Shared secret derived from X25519 key exchange

### Key Storage
- Private keys stored in device secure storage (Keychain/Keystore)
- Public keys stored in Supabase for discovery
