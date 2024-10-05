import { defineConfig } from 'vitest/config';
import { join } from 'path';

export default defineConfig({
  root: import.meta.dirname,
  test: {
    mockReset: true,
    testTimeout: 30_000,
    setupFiles: [
      join(import.meta.dirname, 'vitest.setup.ts'),
    ],
  },
});
