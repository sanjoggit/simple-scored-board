import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teamACounter: 0,
    teamBCounter: 0
  },
  getters: {
    teamACount: state => {
      return state.teamACounter;
    },
    teamBCount: state => {
      return state.teamBCounter;
    },
    scoreStatus: state => {
      if (state.teamACounter === 0 && state.teamBCounter === 0) {
        return "There are no Score yet";
      } else if (state.teamACounter > state.teamBCounter) {
        return "Team A is winning";
      } else if (state.teamACounter < state.teamBCounter) {
        return "Team B is winning";
      } else {
        return "Draw";
      }
    }
  },
  mutations: {
    increaseA: state => {
      state.teamACounter++;
    },
    increaseB: state => {
      state.teamBCounter++;
    },
    updateScore: (state, payload) => {
      state.teamACounter += payload.teamA;
      state.teamBCounter += payload.teamB;
    },
    resetBoard: state => {
      state.teamACounter = 0;
      state.teamBCounter = 0;
    }
  }
});
