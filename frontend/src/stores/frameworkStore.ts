import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { Framework } from '../models/framework.model';

export const useFrameworkStore = defineStore('framework', {
  state: () => ({
    frameworks: ref<Framework[]>([]),
    framework: ref<Framework>(),
    url: 'http://localhost:5000/frameworks',
  }),
  getters: {
    getPosts(state) {
      return state.frameworks;
    },
    getPost(state) {
      return state.framework;
    },
  },
  actions: {
    async getAllFrameworks() {
      try {
        const response = await axios.get(this.url);
        this.frameworks = response.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    async getFrameworkByID(_id: string) {
      try {
        const response = await axios.get(`${this.url}/${_id}`);
        this.frameworks = response.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async createFramework() {
      try {
        const response = await axios.post(this.url, this.framework);
        return response.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async deletePost(_id: string) {
      try {
        const response = await axios.delete(`${this.url}/${_id}`);
        return response.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async updatePost(_id: string, framework: object) {
      try {
        const response = await axios.patch(`${this.url}/${_id}`, framework);
        return response.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
