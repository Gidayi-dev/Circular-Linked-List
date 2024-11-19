class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    constructor() {
      this.head = null;
    }
  
    
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
       
        this.head = newNode;
        newNode.next = this.head;
      } else {
        let current = this.head;
        
        while (current.next !== this.head) {
          current = current.next;
        }
        
        current.next = newNode;
        newNode.next = this.head;
      }
    }
  
    
    swapFirstTwo() {
      if (this.head && this.head.next !== this.head) {
        
        [this.head.data, this.head.next.data] = [this.head.next.data, this.head.data];
      }
    }
  
    
    display() {
      if (!this.head) {
        console.log("The list is empty.");
        return;
      }
      let current = this.head;
      const nodes = [];
      
      do {
        nodes.push(current.data);
        current = current.next;
      } while (current !== this.head); 
  
      console.log(nodes.join(" -> ") + " -> (back to head)");
    }
  }
  
  
  const cll = new CircularLinkedList();
  cll.append(1);
  cll.append(2);
  cll.append(3);
  console.log("Initial circular linked list:");
  cll.display(); 
  
  cll.swapFirstTwo();
  console.log("Swapping first two nodes:");
  cll.display();