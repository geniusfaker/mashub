import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface Link {
  title: string;
  url?: string;
  icon?: string;
}

export const EssentialLinks = [
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
];

export const useLinksStore = defineStore({
  id: 'linksStore',

  state: () => ({
    leftDrawerOpen: ref(false),
  }),
  getters: {
    toggleLeftDrawer: (state) => {
      return (state.leftDrawerOpen = !state.leftDrawerOpen);
    },
  },
  actions: {},
});
