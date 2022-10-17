import Fs from "fs";
import Path from "path"

// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

export default function writeFile (path, fileName, fileContent, callback) {
    // console.log(path, fileName, callback)
    try {
        const _path = Path.resolve(process.cwd(), process.env.APP_ROOT || '', path, `${fileName}.md`);
        if (!Fs.existsSync(_path)) {
            Fs.writeFile(
                _path,
                fileContent,
                callback ? callback(err) : (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('文档创建成功：\n',`./${path}${fileName}.md`);
                    }
                }
            );
        } else {
            console.log("文档已存在，请重新填写文档名称，或重新选择文档目录")
        }
    } catch (err) {
        console.log(err)
    }
}
