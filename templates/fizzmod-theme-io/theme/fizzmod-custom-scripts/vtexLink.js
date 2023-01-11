const inquirer = require('inquirer');
const chalk = require('chalk');
const UTILS = require('./utils');

const { execute, log, getAndSetVendor } = UTILS;

const login = process.argv[2] === '--login'
const unlink = process.argv[3] === '--unlink'

let selectedWorkspace = null;

const METHODS = {
  async getDevelopmentWorkspace() {
    const questions = [
      {
        type: 'input',
        name: 'selectedWorkspaceDev',
        message: 'Specify development workspace to link to:'
      }
    ];
    const { selectedWorkspaceDev } = await inquirer.prompt(questions);
    return Promise.resolve(selectedWorkspaceDev);
  }
}

const VTEX_ACTIONS = {
  async init() {
    const vendor = await getAndSetVendor();
    log('initializing linking process...');
    if (login) {
      log('initializing vtex login process...')
      return execute(`vtex login ${vendor}`, () => {
        log('user logged successfully');
        VTEX_ACTIONS.linkProcess()
      });
    }
    VTEX_ACTIONS.linkProcess();
  },

  unlinkAll(cb) {
    log("unlinking all workspace's currently linked apps...")
    execute('vtex unlink -a', cb)
  },

  switchWorkspace(selectedWorkspace, cb) {
    log('switching workspace...')
    execute(`vtex use ${selectedWorkspace}`, cb)
  },

  link() {
    log(`vtex link command executed in workspace ${chalk.bold.yellow(selectedWorkspace)}`)
  },

  async linkProcess() {
    const currentWorkspace = await METHODS.getDevelopmentWorkspace();
    selectedWorkspace = currentWorkspace;

    const link = () => {
      VTEX_ACTIONS.switchWorkspace(selectedWorkspace, () => {
        log(`currentWorkspace: ${chalk.bold.yellow(selectedWorkspace)}`)
        if (unlink) return VTEX_ACTIONS.unlinkAll(VTEX_ACTIONS.link);
        VTEX_ACTIONS.link()
      })
    }
    return link()
  }
}

VTEX_ACTIONS.init();