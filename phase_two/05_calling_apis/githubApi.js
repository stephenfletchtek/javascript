const got = require('got');
const baseurl = 'https://api.github.com/repos/';

class GithubApi {

  fetchRepositoryInfo(repo, callback) {
    got(baseurl + repo)
      .then((response) => {
        const responseObject = JSON.parse(response.body)
        callback(responseObject)
      });
  };
};

module.exports = GithubApi;

// in node
// const GithubApi = require('./githubApi');
// const api = new GithubApi();
// api.fetchRepositoryInfo('sinatra/sinatra', console.log);
