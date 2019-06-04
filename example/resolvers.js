module.exports = {
  Query: {
    launches: async (_, args, { dataSources }) => {
      const allLaunches = await dataSources.launchAPI.getAllLaunches();
      return allLaunches.reverse();
    },
    launch: (_, { id }, { dataSources }) =>
      dataSources.launchAPI.getLaunchById({ launchId: id }),
  }
}
