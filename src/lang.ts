import { ENUSTEXTS } from "./texts/en-us";
import { ESTEXTS } from "./texts/es";
import { PTBRTEXTS } from "./texts/pt-br";
import { RUSTEXTS } from "./texts/ru";
import { ZHTEXT } from "./texts/zn-cn";

export const LANGS={
    ptBr:{
        path:['pt-br','contador-de-caracteres'],
        data:PTBRTEXTS,
    },
    enUS:{
        path:['en-us','character-counter'],
        data:ENUSTEXTS
    },
    esES:{
        path:['es-es','contador-de-caracteres'],
        data:ESTEXTS,
    },
    zh:{
        path:['zh','zi-fu-ji-shu-qi'],
        data:ZHTEXT,
    },
    ru:{
        path:['ru','schetchik-simvolov'],
        data:RUSTEXTS,
    },
}