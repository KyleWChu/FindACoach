export default {
  registerCoach(context, data) {
    const coachData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };
    console.log("HELLO");
    console.log(coachData.id);
    context.commit('registerCoach', coachData);
  }
};