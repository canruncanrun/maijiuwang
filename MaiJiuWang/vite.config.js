import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 自动引入
import AutoImport from 'unplugin-auto-import/vite'

import Components from 'unplugin-vue-components/vite'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    // 配置按需引入
  AutoImport({
    resolvers: [ElementPlusResolver()]
  }),
  Components({

    resolvers: [ElementPlusResolver()],

  }),
  
  ],
  // server: {
    // proxy: {
    //     '/api': { // 匹配请求路径，
    //         target: 'https://www.maijiuwang.com/api',
    //         // 代理的目标地址
    //          // 开发模式，默认的127.0.0.1,开启后代理服务会把origin修改为目标地址
    //         changeOrigin: true,
    //         // secure: true, // 是否https接口
    //         // ws: true, // 是否代理websockets

    //         // 路径重写，**** 如果你的后端有统一前缀(如:/api)，就不开启；没有就开启
    //         //简单来说，就是是否改路径 加某些东西
    //         rewrite: (path) => path.replace(/^\/api/, '') 
    //     }
    // }
  // },
  css: {
    preprocessorOptions: {
      scss: {
        /**如果引入多个文件，可以使用
       * '@import "@/assets/scss/globalVariable1.scss";
       * @import"@/assets/scss/globalVariable2.scss";'
      **/
        additionalData: '@import "@/assets/style/globalVar.scss";',
      }
    }
  },
  // pluginOptions: {
  //   'style-resources-loader': {
  //     preProcessor: 'sass',
  //     patterns: []
  //   }
  // }

})



