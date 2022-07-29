import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { Extension } from '../models/extension.model ';

export const useExtensionStore = defineStore('extension', {
  state: () => ({
    extensions: ref<Extension[]>([]),
    extension: ref<Extension>(),
    url: 'http://localhost:5000/extensions',
  }),
  getters: {
    getPosts(state) {
      return state.extensions;
    },
    getPost(state) {
      return state.extension;
    },
  },
  actions: {
    async getAllExtensions() {
      try {
        const response = await axios.get(this.url);
        this.extensions = response.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    async getExtensionByID(_id: string) {
      try {
        const response = await axios.get(`${this.url}/${_id}`);
        this.extensions = response.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async createExtension() {
      try {
        const response = await axios.post(this.url, this.extension);
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
    async updatePost(_id: string, extension: object) {
      try {
        const response = await axios.patch(`${this.url}/${_id}`, extension);
        return response.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
