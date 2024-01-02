class StackWithArray{

    constructor() {
        this.items = []
        this.size = 0
    }

    push(val){
        this.items.push(val)
    }

    pop(){
        if(this.items.length === 0) return undefined
        item = this.items.pop()
        return item
    }
    peek(){
        if(this.items.length === 0) return undefined
        return this.items[this.items.length - 1]
    }
    size(){
        return this.items.length
    }
}