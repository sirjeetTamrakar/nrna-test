import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
import svgr from 'vite-plugin-svgr';

export default defineConfig(() => {
  return {
    plugins: [react(), jsconfigPaths(), svgr({ svgrOptions: { icon: true } })],
    define: {
      APP_VERSION: JSON.stringify(process.env.npm_package_version)
    }
  };
});
