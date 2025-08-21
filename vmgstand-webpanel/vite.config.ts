import { fileURLToPath, URL } from 'node:url'

import type { ConfigEnv } from 'vite' 
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import pcNormalize from 'postcss-normalize'
import pcPresetEnv from 'postcss-preset-env'
import { AcceptedPlugin } from 'postcss'

const NODE_ENV = process.env.NODE_ENV

// https://stackoverflow.com/questions/66389043/how-can-i-use-vite-env-variables-in-vite-config-js
export default ({ mode }: ConfigEnv) => {
    process.env = {
      ...process.env,
      ...loadEnv(mode, process.cwd())
    };

    return defineConfig({
        // https://vite.dev/config/
        plugins: [
            vue(),
            vueDevTools()
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        // https://github.com/pachyderm/pachyderm/blob/master/console/frontend/vite.config.ts
        css: {
            postcss: {
                plugins: [
                    pcNormalize() as AcceptedPlugin,
                    pcPresetEnv({ stage: 1 })
                ]
            }
        }
    })
}
