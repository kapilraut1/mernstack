
// managing the clutters by grouping them with ext

import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basePath = "C:\\Users\\Lenovo\\Documents\\prac";

let files = await fs.readdir(basePath);

for (const element of files) {
  // ext=[go][png][2-1]
  let ext = element.split(".")[element.split(".").length - 1];
  if (ext != "js" && ext != "json") {
    if (fsn.existsSync(path.join(basePath, ext))) {
      fs.rename(
        path.join(basePath, element),
        path.join(basePath, ext, element)
      );
    } else {
      fs.mkdir(ext);
      fs.rename(
        path.join(basePath, element),
        path.join(basePath, ext, element)
      );
    }
  }
}
