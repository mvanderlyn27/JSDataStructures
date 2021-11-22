const linkedlist = class {
    constructor(data) {
        this.head = null;
        if (data.length > 0) {
            this.head = new node(val);
            let next_node = head;
            data.substring(1).forEach(val => {
                let new_node = new node(val);
                next_node.setNext(new_node);
                next_node = new_node;
            });
        }
    }

    get(val) {
        let temp = this.head;
        while (this.head.getNext() != null) {
            if(temp.getValue()==val){
                return temp;
            }
            temp = temp.getNext();
        }
        return null;
    }

    getHead() {
        return this.head;
    }

    setHead(node) {
        this.head = node;
    }

    toString() {
        let temp = this.head;
        let output = "" + temp.getValue();
        while (this.head.getNext() != null) {
            temp = temp.getNext();
            output += temp.getValue();
        }
        return output;
    }
}
const node = class {
    constructor(data, next) {
        this.data = data ? data : null;
        this.next = next ? next : null;
    }

    setNext(node) {
        this.next = node;
    }

    getNext() {
        return this.next;
    }

    getValue() {
        return this.value;
    }

    setValue(val) {
        this.value = val;
    }
}