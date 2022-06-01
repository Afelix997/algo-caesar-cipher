exports.caesarCipher = function(str,shift) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let upperAlpha= alpha.repeat(2).toUpperCase().split('')
    alpha= alpha.repeat(2).split('')      
    str = str.split("")

    if (Math.sign(shift) == -1){
    alpha.reverse()
    upperAlpha.reverse()
    shift= Math.abs(shift) 
    }

    for(let i=0;i<str.length;i++){
        if((/[a-zA-Z]/.test(str[i])) && (str[i]==str[i].toUpperCase())){
            str[i]= upperAlpha[upperAlpha.indexOf(str[i])+shift] 
        } else if (/[a-zA-Z]/.test(str[i])){
            str[i]=alpha[alpha.indexOf(str[i])+shift]
        }}

    let result= str.join('')
    return result

}

