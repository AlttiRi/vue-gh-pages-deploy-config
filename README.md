
## blank.yml

The example config file for Github Actions for automatic building and deploying a site to Github Pages.

The required file location: `.github/workflows/blank.yml`.

It requires to add `ACCESS_TOKEN` _((Profile) Settings -> Developer settings -> [Personal access tokens](https://github.com/settings/tokens))_ as a secret in the _repository_ settings. Only `public_repo` permission for the token is required.

How it works (in general):
- Trigger on commit to `master` branch
- Install the dependencies with `npm ci` and build the project with `npm run build`
- Copy `index.html` and `dist/` folder to the temporal `.gh-pages` (default) folder
- Init the Git in this folder
- Pull commit history (if exists) for the branch that is used as a source for Github Pages – `gh-pages` (default)
- Check is it the last commit and are there changes, and if it's true, commit the changes with `Deploy` (default) message and push it to `gh-pages` (default) branch.

## gh-deploy.sh

Run it to do the same thing, but locally.

The required file location: `.github/gh-deploy.sh`.

It does not require to have the token.

---

### DO NOT FORGOT TO CHANGE IT
```bash
repo_name="<REPO>";   
owner_name="<USER>";
```
in `gh-deploy.sh`.

For example:
```bash
repo_name="your-repo-name";   # It's important thing. The repo name where to push.
owner_name="committer-name";  # It's just displayed commiter name.
```

---

[Here is the demo repository](https://github.com/AlttiRi/formatted-number) that uses it.
