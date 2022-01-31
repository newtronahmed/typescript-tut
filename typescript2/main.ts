function addId<T> (obj:T){
let id = Math.random().toString(16)
return{
    ...obj, id
}
}
addId({name:'ahmed'})
