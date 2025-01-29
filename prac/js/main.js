import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basePath = "C:\\Users\\Lenovo\\Documents\\prac"
/*
let files = await fs.readdir(basepath)

for (const item of files) {
    console.log("running for ", item)
    let ext = item.split(".")[item.split(".").length - 1]
    if (ext != "js" && ext != "json") {


        if (fsn.existsSync(path.join(basepath, ext))) {
            // Move the file to this directory if its not a js or json file
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }

}

import fs from "fs";
import path from "path"

let basePath="C:\\Users\\Lenovo\\Documents\\prac";
*/
let files = await fs.readdir(basePath) ;

for (const element of files) {
    // ext=[go][png][2-1]
    let ext= element.split(".")[element.split(".").length-1];
    if(ext!="jpg" && ext!="json"){
        if(fsn.existsSync(path.join(basePath, ext))){
fs.rename(path.join(basePath, element), path.join(basePath, ext, element))
        }
        else{
            fs.mkdir(ext);
            fs.rename(path.join(basePath, element), path.join(basePath, ext, element))
        }
    }
}