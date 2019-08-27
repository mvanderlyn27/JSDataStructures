const tree = class {
    constructor(value, children){
     this.value = value? value : null ;
     this.children = children? children: []; //other trees
    }
    addChild(child){
        this.children.push(child);
    }
    removeChild(child){
        if(this.children.indexOf(child)>=0){
            this.children.remove(child);
        }
    }
    getChildren(){
        return this.children;
    }
    setValue(val) {
        this.value = val;
    }
    getValue(){
        return this.value;
    }
}


