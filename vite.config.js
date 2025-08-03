import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(),
        tailwindcss()
    ],
    base: process.env.BASE_PATH ?? '/',
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './src/test/setup.js',
    },
})
