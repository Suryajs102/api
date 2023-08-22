const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*+-*/";

const createpassword = (length=8,hasnumbers=true,hassymbols=true)=>{
    let chars = alpha;
    hasnumbers ? (chars+=numbers):"";
    hassymbols ? (chars+=symbols):"";

    return generatepassword(length, chars);
};

const generatepassword = (length,chars)=>{
    let password = "";
    for(let i=0;i<length;i++){
        password+=chars.charAt(math.floor(math.random()*chars.length));
    }
    return password;
};

module.exports = createpassword;