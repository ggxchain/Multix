import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'
import path from 'path'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  build: {
    outDir: 'build'
  },
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        icon: true
        // ...svgr options (https://react-svgr.com/docs/options/)
      }
    })
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      '@polkadot/react-components': path.resolve(__dirname, '../react-components/src'),
      '@polkadot/react-hooks': path.resolve(__dirname, '../react-hooks/src'),
      '@polkadot/react-params': path.resolve(__dirname, '../react-params/src'),
      '@polkadot/react-query': path.resolve(__dirname, '../react-query/src'),
      '@polkadot/react-signer': path.resolve(__dirname, '../react-signer/src'),
      '@polkadot/react-api/statics': path.resolve(__dirname, '../react-api/src/statics.ts'),
      '@polkadot/react-api/hoc': path.resolve(__dirname, '../react-api/src/hoc'),
      '@polkadot/react-components/*': path.resolve(__dirname, '../react-components/src/*'),
      '@polkadot/react-hooks/*': path.resolve(__dirname, '../react-hooks/src/*'),
      '@polkadot/react-params/*': path.resolve(__dirname, '../react-params/src/*'),
      '@polkadot/react-query/*': path.resolve(__dirname, '../react-query/src/*'),
      '@polkadot/react-signer/*': path.resolve(__dirname, '../react-signer/src/*')
    }
  },
  optimizeDeps: {
    include: ['@mui/icons-material'],
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis'
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true
        })
      ]
    }
  }
})
