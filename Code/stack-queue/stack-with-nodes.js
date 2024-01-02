class Node{
    constructor(val){
        this.value = val
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
        this.size = 0
    }

    push(val){
        const newNode = new Node(val)
        if(!this.top){
            this.top = newNode
        } else {
            newNode.next = this.top
            this.top = newNode
        }
        this.size++
        return this
    }

    pop(){

        if(!this.top) return null
        const removedNode = this.top
        this.top = this.top.next
        this.size--
        return removedNode.value
    }

    peek(){
        if(!this.top) return undefined
        return this.top.value
    }
    size(){
        return this.size
    }
    
}   