import { LANGS } from "./lang";
import fs from 'fs';
import path from 'path';
import { textReplaceEngine } from "./engine/htmlengine";
const TEMPLATEPATH='./template';
const BUILDPATH='./build';
const STATICPATH='src';   

if(fs.existsSync(BUILDPATH)){
    fs.rmSync(BUILDPATH,{recursive:true});
    
}  
fs.mkdirSync(BUILDPATH);
for(let lang of Object.values(LANGS)){
    let finalPath=path.join(BUILDPATH);
    for(let p of lang.path){
         finalPath=path.join(finalPath,p);
         fs.mkdirSync(finalPath);
    }
    fs.cpSync(path.join(TEMPLATEPATH,STATICPATH),path.join(finalPath,STATICPATH),{recursive:true});
    const htmlText=fs.readFileSync(path.join(TEMPLATEPATH,'index.html')).toString();
    const result=textReplaceEngine(htmlText,lang.data);
    fs.cpSync(path.join(TEMPLATEPATH,'favicon.png'),path.join(finalPath,'favicon.png'))
    fs.writeFileSync(path.join(finalPath,'index.html'),result);
}