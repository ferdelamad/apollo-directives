const { RESTDataSource } = require('apollo-datasource-rest');

class LaunchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v2/';
  }

  launchReducer(launch) {
    return {
      id: launch.flight_number || 0,
      cursor: `${launch.launch_date_unix}`,
      site: launch.launch_site && launch.launch_site.site_name,
      rocket: {
        id: launch.rocket.rocket_id,
        name: launch.rocket.rocket_name,
        type: launch.rocket.rocket_type,
      },
    };
  }

  async getAllLaunches() {
    const response = await this.get('launches');

    return Array.isArray(response)
      ? response.map(launch => this.launchReducer(launch)) : [];
  }

  async getLaunchById({ launchId }) {
    const res = await this.get('launches', { flight_number: launchId });
    return this.launchReducer(res[0]);
  }

  async getLaunchesByIds({ launchIds }) {
    return Promise.all(
      launchIds.map(launchId => this.getLaunchById({ launchId })),
    );
  }
}

module.exports = LaunchAPI;
