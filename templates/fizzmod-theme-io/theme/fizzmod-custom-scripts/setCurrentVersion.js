const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const UTILS = require('./utils'); 

const { execute, getAndSetVendor, log, getManifest } = UTILS;
const login = process.argv[2] === '--verbose';
let selectedWorkspace = null;

const METHODS = {
  async getProductionWorkspaceList(workspaceList) {
    try {
      const manifest = getManifest();
      const parseWorkspace = (accum, curr) => {
        if (!curr) return accum;
        const [ name, isProduction ] = curr.split(' ');
        if (isProduction === 'false') return accum;
        return [...accum, name]
      }
  
      const parsedList = workspaceList
        .replace(/[^a-z0-9\.\_]+|\s+/gmi, '--')
        .replace(/name--weight--production--/i, '')
        .replace(/--([0-9]{1,3})--/gmi, ' ')
        .split('--')
        .reduce(parseWorkspace, []);
  
      if (!parsedList || !parsedList.length) throw new Error('Error getting workspace list. Try running "vtex workspace list" in isolation to verify if command output has changed.')
      
      const message = `Select production workspace from which the current ${chalk.green(`${manifest.vendor}.${manifest.name}`)} version will be extracted:`
      
      const options = [
        {
          type: 'list',
          name: 'currentWorkspace',
          message,
          choices: parsedList
        }
      ]
  
      const { currentWorkspace } = await inquirer.prompt(options);
      return currentWorkspace;
    } catch (err) {
      console.log(err);
      process.exit()
    }
  },

  getActiveVersion(workspaceDepsList) {
    console.log(workspaceDepsList); // logging complete dependency list from currentWorkspace
    const manifest = getManifest();
    const themeName = manifest.name || '';
    const appStrLength = themeName.length
    const currentThemeVersionIdx = workspaceDepsList.indexOf(themeName);
    const idxStart = currentThemeVersionIdx + appStrLength;
    
    const currentVersion = workspaceDepsList
      .slice(idxStart)
      .replace(/[^a-z0-9\.]+|\s+/gmi, '--')
      .split('--')
      .filter(term => !!term)
      [0];
  
    const newManifest = { ...manifest, version: currentVersion }
    fs.writeFileSync('../store-framework/manifest.json', JSON.stringify(newManifest, null, 2));
    log(`${chalk.bold('manifest.json:')} vendor switched to ${chalk.bold.yellow(`${manifest.vendor}`)}`);
    log(`${chalk.bold('manifest.json:')} ${chalk.yellow(manifest.name)} version switched to current installed version ${chalk.bold.yellow(currentVersion)} on workspace ${chalk.green(selectedWorkspace)}`)
  }
}

const VTEX_ACTIONS = {
  async init() {
    const vendor = await getAndSetVendor();
    if (login) return execute(`vtex login ${vendor}`, VTEX_ACTIONS.getProductionWorkspaceList);
    return VTEX_ACTIONS.getProductionWorkspaceList();
  },

  getProductionWorkspaceList() {
    execute(`vtex workspace list`, async (workspaceList) => {
      try {
        const currentWorkspace = await METHODS.getProductionWorkspaceList(workspaceList)
        if (currentWorkspace) {
          selectedWorkspace = currentWorkspace;
          return VTEX_ACTIONS.switchWorkspace(currentWorkspace);
        }
      } catch (err) {
        console.log(err);
        process.exit();
      }
    });    
  },

  switchWorkspace(currentWorkspace) {
    execute(`vtex use ${currentWorkspace} --production`, VTEX_ACTIONS.findVersion)
  },

  findVersion() {
    execute('vtex list', METHODS.getActiveVersion)
  }
}

VTEX_ACTIONS.init();