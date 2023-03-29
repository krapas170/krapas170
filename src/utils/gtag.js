export const dataLayer = window.dataLayer || [];

export function initGoogleAnalytics() {
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BX8JKCVJYX');
}
