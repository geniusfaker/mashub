import { defineStore } from 'pinia';
import { ref } from 'vue';

interface MenuLink {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
}
withDefaults(defineProps<MenuLink>(), {
  caption: '',
  link: '#',
  icon: '',
});

export type MenuLinkProps = {
  MenuLinks: MenuLink[];
};
export const useMenuStore = defineStore({
  id: 'menuStore',

  state: () => ({
    leftDrawerOpen: ref(false),
    MenuLinks: [
      {
        title: 'Home',
        icon: 'home',
        url: '/#',
      },
      {
        title: 'Multi Agent Systems',
        icon: 'code',
        url: '/#/agents',
      },
      {
        title: 'Frameworks',
        icon: 'public',
        url: '/#/frameworks',
      },
      {
        title: 'Extensions',
        icon: 'rss_feed',
        url: '/#/extensions',
      },
      {
        title: 'About',
        icon: 'info',
        url: '/#/about',
      },
    ],
  }),
  getters: {
    toggleLeftDrawer: (state) => {
      return (state.leftDrawerOpen = !state.leftDrawerOpen);
    },
  },
  actions: {},
});
