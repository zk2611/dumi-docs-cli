import inquirer from "inquirer";
import { Command } from "commander";
import { categoryMap, questionMap, senseCompGroupChoices, uiCompGroupChoices } from "./config.js";
import createTemplateMd from "./scripts/createTemplateMd.js";
import writeFile from "./scripts/writeFile.js";

const prompt = inquirer.createPromptModule();
const program = new Command();

program.option("-w, --write", "创建文档模板").parse();
const options = program.opts();

if (options.write) {
    try {
        const { name, creator, category: categoryLabel } = await prompt([
            questionMap.name,
            questionMap.creator,
            questionMap.category,
        ]);
        // console.log(name, categoryLabel);

        let group = '';
        let categoryPath = '';
        let order = 0;
        if (categoryLabel === categoryMap["uiComp"].label) {
            group = (await prompt(questionMap.uiCompGroup)).group;
            order = uiCompGroupChoices.indexOf(group);
            categoryPath = categoryMap["uiComp"].path;
        } else if (categoryLabel === categoryMap["senseComp"].label) {
            group = (await prompt(questionMap.senseCompGroup)).group;
            order = senseCompGroupChoices.indexOf(group);
            categoryPath = categoryMap["senseComp"].path;
        } else if (categoryLabel === categoryMap["utilsFunc"].label) {
            group = (await prompt(questionMap.senseCompGroup)).group;
            order = senseCompGroupChoices.indexOf(group);
            categoryPath = categoryMap["utilsFunc"].path;
        }
        writeFile(categoryPath, name, createTemplateMd({
            group, order, creator
        }));
    } catch (error) {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    }
}
