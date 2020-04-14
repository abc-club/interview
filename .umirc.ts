import { defineConfig } from 'dumi';

export default defineConfig({
  title: '前端面试',
  mode: 'site',
  locales: [['zh-CN', '中文']],
  navs: [
    null,
    { title: 'GitHub', path: 'https://github.com/abc-club/interview-website' },
  ],
  scripts: [
    'https://www.googletagmanager.com/gtag/js?id=UA-146431251-3',
    "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date());gtag('config', 'UA-146431251-3');",
  ],
  // more config: https://d.umijs.org/config
});
