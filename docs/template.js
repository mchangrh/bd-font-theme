const template = `/**
 * @name {{font}}
 * @description custom font
 * @author mchangrh
 * @version 1.0.0
 * @source https://github.com/mchangrh/bd-font-theme
*/

:root {
  --font: '{{font}}';
}
.theme-dark, .theme-light {
  --font-primary: var(--font) !important;
  --font-display: var(--font) !important;
}
`