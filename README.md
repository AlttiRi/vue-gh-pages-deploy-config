
## Vue.js GitHub Actions deploy config to GitHub Pages

Vue.js example config for automatic builing and deploing of an application to GitHub Pages with GitHub Actions.

What you need to do:

1. Create `.github/workflows/blank.yml` file.
2. Fill it with https://github.com/AlttiRi/vue-gh-pages-deploy-config/blob/master/.github/workflows/blank.yml.
3. Commit and push to GitHub. Now the GitHub will start to use the config.
4. Do additional commit and push it to GitHub to trigger the GitHub Action. It will create `.gh-pages` branch with the built application content. Do not forgot to add to git `package-lock.json`, since it uses `npm ci`.
![image](https://user-images.githubusercontent.com/16310547/211168429-4396a892-b80d-41e9-9b13-48699d038661.png)

5. Now select `.gh-pages` branch as for GitHub Pages in your repository setting on GitHub.
![image](https://user-images.githubusercontent.com/16310547/211168472-236d87c0-1d66-42ea-8acf-133dcf62ddb6.png)
6. A few moments later...

![image](https://user-images.githubusercontent.com/16310547/211168497-cb421fc5-d654-457a-9a83-fbbbf54f9e8d.png)

---

How it works (in general):
- Fires on a commit to `master`/`main` branch
- Installs the dependencies with `npm ci` and build the project with `npm run build`
- Copies `dist/` folder to the temporal `.gh-pages` (default) folder
- Inits the Git in this folder
- Pulls commit history (if exists) for the branch that is used as a source for Github Pages – `gh-pages` (default)
- Checks is it the last commit and are there changes, and if it's true, commits the changes with `Deploy` (default) message and pushes it to `gh-pages` (default) branch.

---

[Here is the demo repository](https://github.com/AlttiRi/keep-lister) that uses it.
