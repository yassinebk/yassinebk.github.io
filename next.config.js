const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com','scontent.ftun6-1.fna.fbcdn.net']
  }
}
