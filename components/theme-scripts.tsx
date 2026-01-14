export function ThemeScript() {
  const script = `
    (function() {
      try {
        const stored = localStorage.getItem('theme');
        if (!stored) return;
        
        const theme = JSON.parse(stored);
        const root = document.documentElement;
        
        // Detect current mode
        const isDark = root.classList.contains('dark') || 
                      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
        const mode = isDark ? 'dark' : 'light';
        
        // Apply theme styles
        if (theme.styles && theme.styles[mode]) {
          const vars = theme.styles[mode];
          Object.entries(vars).forEach(([key, value]) => {
            root.style.setProperty('--' + key, value);
          });
        }
      } catch (e) {
        console.error('Error applying theme:', e);
      }
    })();
  `

  return <script dangerouslySetInnerHTML={{ __html: script }} suppressHydrationWarning />
}
