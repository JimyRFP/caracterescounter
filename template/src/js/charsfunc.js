
const funcs=[
    (t)=>{return t.length},
    getNumberOfWords,
    getNumberOfLines,
]


function getNumberOfLines(t){
    if(!t.trim())
      return 0;
    let lines=t.split('\n');
    let numberOfLines=lines.length;
    if(!lines[lines.length-1].trim()){
       numberOfLines--;
    }
    return numberOfLines;
}

function getNumberOfWords(t){
    let temp=t.replaceAll('   ',' ');
    temp=temp.replaceAll('\n',' ');
    let tempa=temp.split(' ');
    let n=0;
    for(let t of tempa){
        let treat=removeAccentuation(t).trim();
        if(!treat)
          continue;
        if(hasAtLeastOneChar(treat))
           n++;
    }
    return n;
  }
function calcCharsAndUpdateHtml(elm,names){
    const value=elm.value||'';
    const result=document.getElementById('result_list');
    for(let i=0;i<funcs.length;i++){
        result.children[i].innerHTML=`${names[i]}: ${funcs[i](value)}`;
    }
}

function removeAccentuation(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function hasJustChars(t){
   for(let i=0;i<t.length;i++){
      let code=t.charCodeAt(i);
      if((code>64&&code<91)||(code>96&&code<123)){
        continue;
      }
      return false;
   }
   return true;
}
function hasAtLeastOneChar(t){
    for(let i=0;i<t.length;i++){
       let code=t.charCodeAt(i);
       if((code>64&&code<91)||(code>96&&code<123)){
         return true;
       }
    }
    return false;
 }
