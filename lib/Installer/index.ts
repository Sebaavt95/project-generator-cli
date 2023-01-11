import fs from 'fs';
import Logger from '../Logger';
import emoji from 'node-emoji';

const log = new Logger();

class Installer {
  templatePath: string;
  destination: string;
  replacements: Record<string, string>;

  constructor(
    templatePath: string,
    destination: string,
    replacements: Record<string, string>
  ) {
    this.destination = destination;
    this.templatePath = templatePath;
    this.replacements = replacements;
  }

  parseFile(file: string, replacements: Record<string, string>) {
    for (const [key, value] of Object.entries(replacements)) {
      file = file.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), value);
    }
    return file;
  }

  async createContent(
    templatePath: string,
    newTemplatePath: string
  ): Promise<void> {
    const filesToCreate = fs.readdirSync(templatePath, { withFileTypes: true });

    filesToCreate.forEach(file => {
      const originalPath = `${templatePath}/${file.name}`;
      const newPath = `${newTemplatePath}/${file.name}`;

      const stats = fs.statSync(originalPath);

      if (stats.isFile()) {
        const content = fs.readFileSync(originalPath, 'utf-8');

        const newContent = this.parseFile(content, this.replacements);

        const parsedPath = this.parseFile(newPath, this.replacements);

        return fs.writeFileSync(parsedPath, newContent, 'utf-8');
      }

      if (stats.isDirectory()) {
        const newFileName = this.parseFile(file.name, this.replacements);

        fs.mkdirSync(`${newTemplatePath}/${newFileName}`);

        this.createContent(originalPath, newPath);
      }
    });
  }

  async build() {
    try {
      fs.mkdirSync(this.destination, { recursive: true });
      await this.createContent(this.templatePath, this.destination);

      log.success(
        `\n${emoji.get('rocket')} Happy coding ${emoji.get('computer')}`
      );
    } catch (reason) {
      if (reason instanceof Error) {
        log.error(reason.message);
      }
    }
  }
}

export default Installer;
