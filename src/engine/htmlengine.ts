export function textReplaceEngine(src:string,params:any){
     let findedParam=getTextParam(src,0);
     let retText=src;
     while(findedParam){
         console.log(findedParam);
         let useParam=findedParam.param.toLocaleLowerCase();
         if(!params[useParam])
             throw "unnown param "+useParam;
         retText=retText.replace(`&%&${findedParam.param}&%&`,params[useParam]);
         findedParam=getTextParam(src,findedParam.endIndex+3);
     }
     return retText;
}
function getTextParam(text:string,start:number){
     let startIndex=text.slice(start).indexOf('&%&')+start;
     if(startIndex<=start)
        return false;
     let endIndex=text.slice(startIndex+3).indexOf('&%&')
     if(endIndex<0)
         throw "param must have end with %";
     endIndex+=startIndex+3;   
    return {
        startIndex,
        endIndex,
        param:text.slice(startIndex+3,endIndex),
    }    
}