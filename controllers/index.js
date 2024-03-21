const GithubService = require('../services/github.service');

class Github {
 static async getTopContributors(req, res) {
  try {
   const { owner, repo, type } = req.query;

   if (!owner || !repo || !type) {
    return res.status(400).json({ err: 'owner, repo, and type are required fields' });
   }

   const response = await GithubService.getTopRepositories({ owner, repo, type });
   return res.send(response);
  } catch (error) {
   return res.status(500).json({ message: error.message });
  }
 }
}

module.exports = { Github };
