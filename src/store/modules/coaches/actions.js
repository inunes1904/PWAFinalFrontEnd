export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };

    const response = await fetch(
      `https://find-coach-pwa-backend.onrender.com/api/coach`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(coachData)
      }
    );

    if (!response.ok) {
      // error ...
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId
    });
    window.location.reload();
  },
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      `https://find-coach-pwa-backend.onrender.com/api/coach`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        id: key,
        _id: responseData[key]._id,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas
      };
      coaches.push(coach);
      console.log(coach);
    }

    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  },
  async deleteCoach(context, id) {
    var response = await fetch(
      `https://find-coach-pwa-backend.onrender.com/api/coach/${id}`,
      {
        method: 'DELETE'
      }
    );

    if (!response.ok) {
      // error ...
    console.log(response);
    }
    context.commit('setFetchTimestamp');
    // Reload Location
    setTimeout(() => {
      window.location.reload();
    }, 300);
    
  },

};

