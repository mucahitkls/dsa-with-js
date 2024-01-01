function print(data){
    console.log(data)
}

class Node{
    constructor(data){
        this.data = data
        this.next=null
    }
}

class SinglyLinkedList {

    constructor(values){
        
        this.head = null
        this.tail = null
        this.length = 0

        if(values && Array.isArray(values)){
            this.buildLinkedList(values)
        }
        
    }

    push(val){
        const newNode = new Node(val);
        if (!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){
        if (!this.head) return undefined

        const current = this.head
        const newTail = current
        while (current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--

        if (this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }

    shift(){
        if (!this.head) return undefined
        var currentHead = self.head
        this.head = currentHead.next
        this.length--

        if (this.length === 0){
            this.tail = null
        }
        return currentHead
    }
    
    unshift(val){
        const newNode = new Node(val)
        if (!this.head){
            this.head = newNode
            this.tail = this.head
        }
        
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }

    get(index){
        if(index < 0 || index >= this.length) return null
        const counter = 0
        const current = this.head
        while(counter !== index){
            current = current.next
            counter++
        }
        return current
    }

    set(index, val){
        const foundNode = this.get(index)
        if (foundNode){
            foundNode.val = val
            return tru
        }
        return false
    }

    insert(index, val){
        if (index < 0 || index > this.length) return false
        if (index === this.length) return !!this.push(val)
        if (index === 0) return !!this.unshift(val)

        const newNode = newNode(val)
        const prev = this.get(index - 1)
        const temp = prev.next
        prev.next = newNode
        newNode.next = temp
        this.length++
        return true
    }

    remove(index){
        
        if(index < 0 || index >= this.length) return undefined
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()
        const previousNode = this.get(index - 1)
        const removed = previousNode.next
        previousNode.next = removed.next
        this.length--
        return removed
    }

    reverse(){
        let node = this.head
        this.head = this.tail
        this.tail = node
        let next
        let prev = null
        for (let i = 0; i < this.length; i++){
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }

    print(){
        if(!this.head) return false
        let current = this.head
        let str = ''
        while(current){
            str += current.data + (current.next ? " --> " : "")
            current = current.next
        }
        console.log(str)
    }

    toArray(){
        if(!this.head) return undefined
        let array = []
        let current = this.head
        while(current){
            array.push(current.data)
            current = current.next
        }
        return array
    }

    _shuffleArray(array){
        let len = array.length
        let currentIndex

        for(currentIndex = len - 1; currentIndex > 0; currentIndex--){
            let randomIndex = Math.floor(Math.random() * (currentIndex + 1))
            var temp = array[currentIndex]
            array[currentIndex] = array[randomIndex]
            array[randomIndex] = temp
        }
        return array
    }

    buildLinkedList(array){
        if(array.length === 0) return undefined
        this.head = new Node(array[0])
        let current = this.head
        for(let i = 1; i < array.length; i++){
            let newNode = new Node(array[i])
            current.next = newNode
            current = newNode
        }
        this.tail = current
        this.length = array.length
        return this

    }

    shuffle(){
        if(!this.head) return undefined
        if(this.length === 1) return this
        let dataArray = this.toArray()
        let suffledArray = this._shuffleArray(dataArray)
        this.buildLinkedList(suffledArray)
    }

}




let my_list = new SinglyLinkedList([1, 2, 3, 4, 5, "hello", 7.5, 8, 9, 10])
print("Before")
my_list.print()
print("After")
my_list.shuffle()
my_list.print()








