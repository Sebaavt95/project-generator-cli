import prompts from 'prompts';
import fs from 'fs';
import path from 'path';
import Logger from '../Logger';
import emoji from 'node-emoji';

export const BASE_DESTINATION = '/var/www';

const log = new Logger();

const choices = fs
  .readdirSync(`./templates`)
  .filter(value => ({ title: value, value }));

interface PromptResponse {
  location: string;
  projectChoice: string;
  productionEnvironment: string;
  qaEnvironment: string;
  projectName: string;
  projectRepository: string;
  locationTemplate?: string;
}

interface Question {
  name: string;
  type: string | ((value: string) => string);
  message?: string;
  choices?: string[];
  validate?: (arg: string) => boolean | string;
  initial?: (prev: PromptResponse, value: PromptResponse) => string;
}

const questions = [
  {
    name: 'projectChoice',
    type: 'select',
    message: 'What project template would you like to generate?',
    choices,
    initial: undefined,
    validate: undefined,
  },
  {
    name: 'productionEnvironment',
    type: 'text',
    message: 'Production vendor/environment:',
    initial: undefined,
    validate: (input = '') =>
      /^([A-Za-z\-_\d])+$/.test(input)
        ? true
        : 'Project name may only include letters, numbers, underscores and hashes.',
  },
  {
    name: 'qaEnvironment',
    type: 'text',
    message: 'QA vendor/environment (leave in blank if it not exists):',
    initial: undefined,
    validate: undefined,
  },
  {
    name: 'projectName',
    type: 'text',
    message: 'Project name:',
    initial: undefined,
    validate: undefined,
  },
  {
    name: 'projectRepository',
    type: 'text',
    message: 'Repository name:',
    initial: undefined,
    validate: (input = '') =>
      /^([A-Za-z\-_\d])+$/.test(input)
        ? true
        : 'Project name may only include letters, numbers, underscores and hashes.',
  },
  {
    name: 'location',
    type: 'text',
    message: "What's the app base dir?",
    initial: (prev: PromptResponse, values: PromptResponse) =>
      `${BASE_DESTINATION}/${values.projectRepository}`,
    validate: (input: string) =>
      !fs.existsSync(input)
        ? true
        : 'directory already exists, choose another one',
  },
];

class Prompt {
  questions: Partial<Question>[];

  constructor() {
    this.questions = questions;
  }

  onCancel() {
    log.warning(`\ninstallation was canceled ${emoji.get('warning')}`);
    process.exit(1);
  }

  async init(): Promise<PromptResponse> {
    const response = await prompts(this.questions, { onCancel: this.onCancel });
    return {
      ...response,
      locationTemplate: path.join(
        '.',
        'templates',
        choices[response.projectChoice]
      ),
    };
  }
}

export default Prompt;
