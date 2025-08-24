export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'primary-hover': 'var(--primary-hover)',
        'bg-main': 'var(--bg-main)',
        'bg-card': 'var(--bg-card)',
        'bg-btn': 'var(--bg-button)',
        'bg-btn-hover': 'var(--bg-button-hover)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'border-custom': 'var(--border-color)'
      }
    }
  }
}