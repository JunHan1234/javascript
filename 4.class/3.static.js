class Article {
    //static은 data에도, method에도 붙일 수 있다.
    static publisher = 'ddanzi'

    constructor(title, viewCnt) {
        this.title = title
        this.viewCnt = viewCnt
    }
    //static은 data에도, method에도 붙일 수 있다.
    static compare(article1, article2) {
        return article1 - article2 //serializing.
    }

    [Symbol.toPrimitive](hint) {
        return hint == 'number' ? this.viewCnt : this.title
    }

    /*
    toString() {
        return this.title
    }

    valueOf() {
        return this.viewCnt
    }
    */
}

console.log(Article.publisher)

//property 추가.
Article.address = 'seoul'
console.log(Article.address)

Article.getPrice = () => 2000
console.log(Article.getPrice())

//
let article1 = new Article('java', 100)
let article2 = new Article('javascript', 10)

console.log(Article.compare(article1, article2))

//
console.log(`${article1}`)
console.log(article1 + '') //의도와는 다르게 valueOf이 실행된다. article1이 먼저 실행되기 때문.
//해결
console.log('' + article1)

//
console.log(article1.publisher, article2.publisher, article1.compare) //publisher, compare등은 Article class에 저장되기 때문.
console.log(Article.title, Article.viewCnt) //title, viewCnt는 new 하면 그 객체에 저장되기 때문.

console.log(Object.keys(Article))
console.log(Article.prototype)
console.log(Object.keys(article1))

let articles = [article1, article2]
console.log(articles)

articles.sort(Article.compare) //sort의 parameter로 callback을 넣어줘야한다.
console.log(articles)
articles.sort((a, b) => a - b) //위 코드와 같은 뜻. 오름차순 정렬.
console.log(articles)

articles.sort((a, b) => b - a) //내림차순 정렬.
console.log(articles)