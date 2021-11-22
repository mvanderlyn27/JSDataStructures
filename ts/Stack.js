//stack class first in last out
const stack = class{
    constructor(collection){
        this.data = collection? collection : [];
    }
    pop(){
        if(this.data.length > 0) {
            return this.data.pop();
        }
        else{
            throw new Error('Stack Empty, Can\'t pop');
        }
    }
    push(data){
        this.data.push(data);
    }
    getData(){
        return this.data;
    }
    toString(){
        return this.data.toString();
    }
};
export default stack;