class Node {
    constructor(data) {
        this.data=data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(data, index) {
        let node = new Node(data);
        let count = 0;
        if(this.head == null) {
            this.head = node;
            console.log('Added head of the list.');
        } 
        else if (index == 0 ){
            node.next = this.head;
            this.head =node;
        }
        else if(index < 0 || index > this.traverse()) {
            console.log('Please Enter a valid index...');
        }
        else if (index == undefined){
            let current1;
            current1 = this.head;
            while(current1.next) {
                current1 = current1.next;
            }
            current1.next = node;
        }
        else {
            let current = this.head;
            let temp;
            while(count < index-1) {
                current=current.next;
                count++;
            }
            temp = current.next;
            current.next = node;
            node.next = temp;
        }
}
    delete(data) {
        if(this.head == null) {
            console.log('The list is empty');
        }
        else if(this.head.data == data) {
            this.head = this.head.next;
        }
        else {
            let current = this.head;
            while(current.next!=null) {
                if(current.next.data == data) {
                    current.next = current.next.next;
                    return;
                }
                else {
                    current = current.next;
                }
            }
            console.log('Item was not found...');
        }
    }
    deleteAtindex(index) {
    try{ 
        let count = 0;
        let size= 0 ;
        let temp = this.head;
        while(temp!=null) {
            temp = temp.next;
            size++;
        }
        if(this.head == null) {
            console.log('List is empty');
        } 
        else if (index == 0){
            this.head = this.head.next;
        }
        else if(index < 0 || index > size) {
            console.log('Please Enter a valid index...');
        }
        else {
            let current = this.head;
            while(count < index-1) {
                    current=current.next;
                    count++;
                }
                    current.next = current.next.next;
            }
        }
        catch (err){
            throw "Please Enter a valid index";
        }
}
    traverse() {
        var count = 0;
        if(this.head == null) {
            console.log('No items in the list');
        }
        
        else {
            let current = this.head
            while(current!=null) {
                console.log(current.data);
                current =current.next;
                count++;
            }
            console.log('Total number of items in your list : '+count);
        }
        return count;
    }
    
    find(data) {
        var count = 1;
        if(this.head == null) {
            console.log('No items in the list');
        }
        else {
            let current = this.head;
            while(current!=null) {
                if(current.data == data) {
                    console.log('Item found at location '+count)
                    return;
                }
                else {
                    current=current.next;
                    count++;
                }
            }
            console.log('Item not found...');
        }
    }
}
const list = new LinkedList();




/*const node = list.find(4);
list.delete(4);
list.insert(new Node(6), 3);*/