function getAdm(map){
    let adms = [];
    for([key, value] of map){
        if(value === 'adm'){
            adms.push(key);
        }
    }
    return adms;
}
const user = new Map();
user.set('fulano', 'adm');
user.set('cicrano', 'adm');
user.set('zezinho', 'user');
user.set('luizinho', 'user');

console.log(getAdm(user));