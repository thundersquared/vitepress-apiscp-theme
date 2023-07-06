import Theme from "@apiscp/vitepress-theme";
import { h } from "vue";

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      // uncomment to test layout slots

      // 'sidebar-top': () => h('div', 'hello top'),
      // 'sidebar-bottom': () => h('div', 'hello bottom'),
      // 'content-top': () => h('h1', 'Announcement!'),
      // 'content-bottom': () => h('div', 'Some ads'),
      // 'aside-top': () => h('div', 'this could be huge'),
      // 'aside-mid': () => h('div', { style: { height: '300px' }}, 'Sponsors'),
      // 'aside-bottom': () => h('div', { style: { height: '300px' }}, 'Sponsors'),
    });
  },
};
