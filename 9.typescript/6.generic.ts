//generic function
function wrap<T>(value: T): T {
    return value
}

const output = wrap('hello') //generic type은 call 할때 type이 정해진다.
console.log(output)

//
interface Woman {
    womanName: string
}

const woman: Woman = {womanName: 'hera'}
const woman2: Woman = wrap(woman)
console.log(woman2)

//generic interface
interface Item<T> {
    itemId: number
    data: T
}

interface Animal {
    animalName: string
}

interface Place {
    locationName: string
}

const animal: Item<Animal> = {
    itemId: 1,
    data: {
        animalName: 'cat'
    }
}

const place: Item<Place> = {
    itemId: 2,
    data: {
        locationName: 'seoul'
    }
}

//generic type
type Product<T> = {
    productId: number
    data: T
}

//generic class

class Queue<T> {
    list: T[] = []

    get length(): number {
        return this.list.length
    }

    enqueue(item: T): void { //queue에 data를 넣는것.
        this.list.push(item)
    }

    dequeue() { //queue에서 data를 꺼내는것.
        return this.list.shift()
    }
}

const queue = new Queue<number>()
queue.enqueue(0)
queue.enqueue(1)

let e = queue.dequeue()
e = queue.dequeue()
console.log(e)