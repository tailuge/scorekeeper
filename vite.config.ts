import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  base: '/',
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'BilliardsScorekeeper',
      fileName: (format) => `billiards-scorekeeper.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    outDir: 'dist',
  },
  define: { 'process.env.NODE_ENV': '"production"' },
});
