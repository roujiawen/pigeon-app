function requireEnv(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(
      `Missing required environment variable: ${name}. ` +
      `Please create a .env file with ${name} defined.`
    );
  }
  return value;
}

function readBooleanEnv(value: string | undefined): boolean {
  if (!value) {
    return false;
  }
  return value.toLowerCase() === 'true' || value === '1';
}

export const env = {
  SUPABASE_URL: requireEnv('EXPO_PUBLIC_SUPABASE_URL', process.env.EXPO_PUBLIC_SUPABASE_URL),
  SUPABASE_ANON_KEY: requireEnv('EXPO_PUBLIC_SUPABASE_ANON_KEY', process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY),
  DEV_HARNESS_ENABLED: readBooleanEnv(process.env.EXPO_PUBLIC_ENABLE_DEV_HARNESS),
} as const;
