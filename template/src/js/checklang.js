const LANGS={
    ptBr:{
        path:['pt-br','contador-de-caracteres'],
    },
    enUS:{
        path:['en-us','character-counter'],
    },
    esES:{
        path:['es-es','contador-de-caracteres'],
    },
    znCN:{
        path:['zn-cn','zi-fu-ji-shu-qi'],
    },
    ru:{
        path:['ru','schetchik-simvolov'],
    },
}
function getLangPath(){
    const lang=window.navigator.language.split('-')[0];
    let finded=LANGS.enUS;
    for(let l of Object.values(LANGS)){
        if(l.path[0].indexOf(lang)>-1){
            finded=l;
            break;
        }
    }
    window.location.href=`${finded.path[0]}/${finded.path[1]}`;
}
getLangPath();