const {resolve} = require('path')

module.exports = {
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        map_gd: resolve(__dirname, 'map/amap.html'),
        compatible: resolve(__dirname, 'compatible/compatible.html'),
      }
    }
  }
}
