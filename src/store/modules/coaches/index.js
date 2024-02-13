import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Ivo',
          lastName: 'Nunes',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Ivo Nunes!",
          hourlyRate: 34
        },
        {
          id: 'c2',
          firstName: 'Ruben',
          lastName: 'Nunes',
          areas: [ 'career'],
          description:
            'I am Ruben Nunes.',
          hourlyRate: 35
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};
