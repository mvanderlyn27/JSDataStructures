//stack class first in first out
const queue = class{
    constructor(collection){
        this.data = collection? collection : [];
    }
    pop(){
        if(this.data.length > 0) {
            return this.data.shift();
        }
        else{
            throw new Error('Stack Empty, Can\'t pop');
        }
    }
    push(data){
        this.data.unshift(data);
    }
    getData(){
        return this.data;
    }
    toString(){
        return this.data.toString();
    }
};
export default queue;