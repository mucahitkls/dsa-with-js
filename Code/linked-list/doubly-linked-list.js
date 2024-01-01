class Node{

    constructor(val){
        this.data = val
        this.next = null
        this.prev = null
    }

}

class DoublyLinkedList{

    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        const newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){
        if(!this.head) return undefined
        const poppedNode = this.tail
        if(this.length === 1){
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length--
        return poppedNode
    }

    shift(){
        if(!this.length === 0) return undefined
        const oldHead = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }
    unshift(val){
        const newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index){
        if(index < 0 || index >= this.length) return null
        let count, current
        if(index <= this.length/2){
            count = 0
            current = this.head
            while(count !== index){
                current = current.next
                count++
            }
        } else {
            count = this.length - 1
            current = this.tail
            while(count !== index){
                current.current.prev
                count--
            }
        }
        return current
    }

    set(index, val){
        var foundNode = this.get(index)
        if(foundNode != null){
            foundNode.data = val
            return true
        }
        return false
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false
        if(index === this.length) return !!this.push(val)
        if(index === 0) return !!this.unshift(val)

        var newNode = new Node(val)
        var beforeNode = this.get(index - 1)
        var afterNode = this.get(index + 1)

        beforeNode.next = newNode, newNode.prev = beforeNode
        afterNode.prev = newNode, newNode.next = afterNode
        return true
    }

    print(){
        let str = "null <--> "
        let current = this.head
        while(current){
            str += current.data + (current.next ? " <--> ": " --> null")
            current = current.next
        }
        console.log(str)
    }

    toArray(){
        if(!this.head) return null
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
        for(currentIndex = len - 1; currentIndex > 0; currentIndex --){
            let randomIndex = Math.floor(Math.random() * (currentIndex + 1))
            var temp = array[currentIndex]
            array[currentIndex] = array[randomIndex]
            array[randomIndex] = temp
        }
        return array
    }

    buildFromArray(array){
        this.head = new Node(array[0])
        this.head.prev = null
        let currentNode = this.head
        for(let i = 1; i < array.length; i++){
            let newNode = new Node(array[i])
            currentNode.next = newNode
            newNode.prev = currentNode
            currentNode = newNode
        }
        this.tail = currentNode
        this.length = array.length
        return this
    }

    shuffle(){
        let dataArray = this.toArray()
        let shuffledDataArray = this._shuffleArray(dataArray)
        this.buildFromArray(shuffledDataArray)
    }

    setHeadFromIndex(index){
        if(index < 0 || index >= this.length) return undefined
        if(index === 0) return this.head

        let newHead = this.get(index)
        if(!newHead) return undefined

        if(index === this.length - 1){
            
            this.tail.prev.next = null
            this.tail.next = this.head
            this.head.prev = this.tail
            this.head = this.tail
            this.tail = this.tail.prev
            this.head.prev = null
            

        } else {
            let currentNode = this.get(index)
            if(!currentNode) return undefined

            let beforeNode = currentNode.prev
            let afterNode = currentNode.next

                if(beforeNode) beforeNode.next = afterNode
                if(afterNode) afterNode.prev = beforeNode

            if(this.tail === currentNode) this.tail = beforeNode

            currentNode.prev = null
            currentNode.next = this.head

            if(this.head) this.head.prev = currentNode
            
            this.head = currentNode
        }
        return this
    }
}

let myList = new DoublyLinkedList()
myList.push(1)
myList.push(2)
myList.push(3)
myList.push(4)
myList.shuffle()
myList.print()