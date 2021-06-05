
## blank.yml

The example config file for GitHub Actions for automatic building and deploying a site to Github Pages.

**The required file location: `.github/workflows/blank.yml`.**

It requires to add `ACCESS_TOKEN` _((Profile) Settings -> Developer settings -> [Personal access tokens](https://github.com/settings/tokens))_ as a secret in the _repository_ settings. Only `public_repo` permission for the token is required.

How it works (in general):
- Fires on a commit to `master` branch
- Installs the dependencies with `npm ci` and build the project with `npm run build`
- Copies `index.html` and `dist/` folder to the temporal `.gh-pages` (default) folder
- Inits the Git in this folder
- Pulls commit history (if exists) for the branch that is used as a source for Github Pages – `gh-pages` (default)
- Checks is it the last commit and are there changes, and if it's true, commit the changes with `Deploy` (default) message and push it to `gh-pages` (default) branch.

---

[Here is the demo repository](https://github.com/AlttiRi/formatted-number-vue3) that uses it.
