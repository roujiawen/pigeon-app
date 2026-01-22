# Environment Variables

## Overview

This project uses environment-specific `.env` files for configuration. Expo's built-in `EXPO_PUBLIC_*` prefix exposes variables to the app at build time.

## Environment Files

| File | Purpose | Committed |
|------|---------|-----------|
| `.env` | Active environment (copied from one of below) | No |
| `.env.dev` | Local Supabase CLI (`127.0.0.1:54321`) | No |
| `.env.staging` | Staging Supabase project | No |
| `.env.production` | Production Supabase project | No |
| `.env.example` | Template with placeholder values | Yes |

## Variables

### Mobile App (`apps/mobile/`)

| Variable | Description | Required |
|----------|-------------|----------|
| `EXPO_PUBLIC_SUPABASE_URL` | Supabase project URL | Yes |
| `EXPO_PUBLIC_SUPABASE_ANON_KEY` | Supabase publishable/anon key | Yes |

### Edge Functions (`supabase/functions/`)

Edge functions access secrets via `Deno.env.get()`. Set these in:
- **Local**: `supabase/.env` or `supabase secrets set`
- **Cloud**: Supabase Dashboard → Project Settings → Edge Functions → Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| (none yet) | | |

## Switching Environments

```bash
# Local development (requires: supabase start)
pnpm start:dev

# Staging
pnpm start:staging

# Production
pnpm start:prod
```

Each script copies the appropriate `.env.*` file to `.env` and clears Metro cache.

## Adding New Variables

1. Add to all `.env.*` files with appropriate values
2. Add placeholder to `.env.example`
3. Update `src/lib/env.ts` to export the new variable
4. Document in this file

## Security Notes

- Never commit `.env` files (except `.env.example`)
- `EXPO_PUBLIC_*` variables are embedded in the JS bundle - only use for public keys
- Use Supabase Edge Functions for operations requiring secret keys
