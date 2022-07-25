import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menuItems: [
      {
        title: 'Home',
        icon: 'home',
        url: '/#',
      },
      {
        title: 'Multi Agent Systems',
        icon: 'settings',
        url: '/#/agents',
      },
      {
        title: 'Frameworks',
        icon: 'home',
        url: '/#/frameworks',
      },
      {
        title: 'Extensions',
        icon: 'trash',
        url: '/#/extensions',
      },
      {
        title: 'About',
        icon: 'home',
        url: '/#/about',
      },
    ],
  }),
  getters: {},
  actions: {},
});
