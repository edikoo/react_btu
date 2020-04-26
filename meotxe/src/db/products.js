import Categories from './category'

let id = Math.round(Math.random() * 100000);

class Product {
    constructor(title, category){
        this.title = title;
        this.category = category;
        this.id = id;
    }
}

const products = [];

Categories.forEach(category => {
    products.push(new Product(`Product - ${category.title}`, category.id))
})

export default products;