import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv, type ProxyOptions } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const useApiProxy = mode !== 'static'
  const proxy: Record<string, ProxyOptions> = {}

  if (useApiProxy) {
    proxy['/api'] = {
      target: `http://localhost:${env.API_PORT || '3001'}`,
      changeOrigin: true,
    }
  }

  return {
    plugins: [
      tailwindcss(),
      react(),
      babel({ presets: [reactCompilerPreset()] }),
    ],
    server: {
      proxy,
    },
    preview: {
      proxy: {},
    },
  }
})
