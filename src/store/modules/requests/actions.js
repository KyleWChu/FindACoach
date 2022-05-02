export default {
  contactCoach(context, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      coachId: payload.CoachId,
      userEmail: payload.email,
      message: payload.message
    };
    context.commit('addRequest', newRequest); //actions -> mutations 
  }
};