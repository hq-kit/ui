import { FONT_STORAGE_KEY, STYLE_STORAGE_KEY, THEME_STORAGE_KEY } from "@/stores/keys"

export function Scripts() {
  const code = `
  (function(){
    try {
      const root = document.documentElement
      const fonts = localStorage.getItem('${FONT_STORAGE_KEY}')
      const fontSans = JSON.parse(fonts)?.state?.fontSans || 'Geist'
      const fontMono = JSON.parse(fonts)?.state?.fontMono || 'Geist Mono'
      const style = JSON.parse(localStorage.getItem('${STYLE_STORAGE_KEY}'))?.state?.style || 'nova'

      root.style.setProperty('--font-sans', fontSans)
      root.style.setProperty('--font-mono', fontMono)
      root.setAttribute('data-style', style)

      const themes = localStorage.getItem('${THEME_STORAGE_KEY}');
      
      if (themes) {
        const parsedTheme = JSON.parse(themes);
        const theme = parsedTheme?.state?.theme

        if (theme === 'system' || !theme) {
          theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        if (theme === 'dark') {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }

        const activeThemeVars = parsedTheme.state.preset[theme];

        if (activeThemeVars) {
          for (const key in activeThemeVars) {
            root.style.setProperty('--' + key, activeThemeVars[key]);
          }
        }
      }
    } catch (e) {}
   })()
`
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: code
      }}
    />
  )
}
