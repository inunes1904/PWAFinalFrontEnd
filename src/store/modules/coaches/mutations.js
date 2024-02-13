export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },
  setCoaches(state, payload) {
    state.coaches = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
  deleteCoach(state, payload ) {
    const theCoachIndex = state.coaches.findIndex(coach => coach.id === payload.id);
    state.coaches = state.coaches.splice(theCoachIndex, 1);
  }

};