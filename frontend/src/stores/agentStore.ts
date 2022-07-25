import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { Agent } from '../models/agent.model';

export const useAgentStore = defineStore('agent', {
  state: () => ({
    agents: ref<Agent[]>([]),
    agent: ref<Agent>(),
    url: 'http://localhost:5000/api/agents',
  }),
  getters: {
    getPosts(state) {
      return state.agents;
    },
    getPost(state) {
      return state.agent;
    },
  },
  actions: {
    async getAllAgents() {
      try {
        const response = await axios.get(this.url);
        this.agents = response.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    async getAgentByID(_id: string) {
      try {
        const response = await axios.get(`${this.url}/${_id}`);
        this.agents = response.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async createAgent() {
      try {
        const response = await axios.post(this.url, this.agent);
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
    async updatePost(_id: string, agent: object) {
      try {
        const response = await axios.patch(`${this.url}/${_id}`, agent);
        return response.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
