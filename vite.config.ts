import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// El sitio se sirve desde https://breaktnes.github.io/broaportfolio/
// En dev usamos "/" para que el server local funcione con normalidad.
const base = process.env.NODE_ENV === 'production' ? '/broaportfolio/' : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2022',
    // three.js / R3F entran por import dinámico (Background3D) y se
    // separan en su propio chunk automáticamente.
  },
})
