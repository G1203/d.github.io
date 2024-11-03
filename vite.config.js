import { defineConfig } from 'vite';
import cssnano from 'cssnano';

export default defineConfig({
    css: {
        preprocessorOptions: {
            less: {
                additionalData: '@import "./src/styles.less";'
            }
        },
        postcss: {
            plugins: [cssnano()]
        }
    }
});
