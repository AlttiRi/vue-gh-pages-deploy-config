## Vue.js GitHub Actions deploy config to GitHub Pages

Vue.js example config for automatic building and deploying of an application to GitHub Pages with GitHub Actions.

If you have on GitHub a Vue.js applicattion source code, that can be compile into a static site with `npm run build` command, you can perform a few simple actions listed below to makes the project automatically hosted on GitHub Pages.

-1. Make sure that you have added all _source files_ in Git, so your project should be able to succesully build after clonning (`git clone`) and installing of dependencies ([`npm ci`](https://docs.npmjs.com/cli/v9/commands/npm-ci)) from `package-lock.json` file. 

    _You can check it with the commands like these:_
    ```bash
    git clone https://github.com/alttiri/vue-gh-pages-deploy-config vue-example-project
    cd vue-example-project
    npm ci
    npm run build
    npm run serve
    ```
    _Just use your own GitHub repository URL instead of [this one](https://github.com/AlttiRi/vue-gh-pages-deploy-config)._

**What you need to do:**

0. Grant **Read and write permissions** for **Workflow** in GitHub repository settings (`/settings/actions`):

![image](https://user-images.githubusercontent.com/16310547/212497270-49429a6e-1c98-4a9b-9ee5-58f9a4905795.png)


1. Create `.github/workflows/blank.yml` file.
    - _Note that `blank.yml` file is within `.github` and `workflows` folders._
    - _Like it is in [this repo](https://github.com/AlttiRi/vue-gh-pages-deploy-config)._
2. Fill it with [the follow content](https://github.com/AlttiRi/vue-gh-pages-deploy-config/blob/master/.github/workflows/blank.yml).
3. Make a commit and push it to GitHub.
    - _Now the GitHub will start to use the config._
4. Do any additional commit and push it to GitHub to trigger GitHub Action. 
    - _It will create `gh-pages` branch with the built application content (the `dist` folder)._    
    - _You should see the follow:_
    
    ![image](https://user-images.githubusercontent.com/16310547/211168995-2eea663f-25f1-45a8-893d-9549e779d9b3.png)
    
    _—_
    
    ![image](https://user-images.githubusercontent.com/16310547/211168429-4396a892-b80d-41e9-9b13-48699d038661.png)

5. Now go to the Settings (`/settings/pages`) of your GitHub repository and select the `gh-pages` branch as for GitHub Pages.
    
    ![image](https://user-images.githubusercontent.com/16310547/211168472-236d87c0-1d66-42ea-8acf-133dcf62ddb6.png)
    
6. A few moments later...

    ![image](https://user-images.githubusercontent.com/16310547/211168497-cb421fc5-d654-457a-9a83-fbbbf54f9e8d.png)
    
7. The built application will be available at the URL like this one:
    - https://alttiri.github.io/vue-gh-pages-deploy-config/

---

How the Action works (in general):
- Fires on a commit to `master`/`main` branch
- Installs the dependencies with `npm ci` and build the project with `npm run build`
- Copies `dist` folder to the temporal `.gh-pages` folder
- Inits the Git in this folder
- Pulls commit history (if exists) for the branch that is used as a source for GitHub Pages – `gh-pages`
- Checks is it the last commit and are there changes, and if it's true, commits the changes with `Deploy` message and pushes it to `gh-pages` branch.

---

Here is another example of a repository that uses this config file: 
 - https://github.com/AlttiRi/keep-lister
