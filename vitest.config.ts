/// <reference types="vitest" />

import { defineConfig} from 'vitest/config'

export default defineConfig({
    test: {
        environmentMatchGlobs: [['src/api/controllers/customers/**', 'prisma']],
    },
})