class ProductManager{
    #accumulator=0;
    #products=[];

    addProduct (title, description, code, price, thumbnail, stock){
       
        const productWithSameCodeExists = this.#products.some(
         (p) => p.code == code
        );
       
        if (productWithSameCodeExists){
            throw new Error ("Producto ya existe")
        }
       
        if (!title || !description || !price || !thumbnail|| !stock){
            throw new Error("Error")
        }
       
        const newProduct ={
            id: this.#accumulator,
            title,
            description,
            code,
            price,
            thumbnail,
            stock
        };
       
        this.#products = [...this.#products, newProduct];
        this.#accumulator++;
    }
    getProduct(){
    console.log(this.#products)
    }
    getProductById(indexOF){
    console.log(this.#products[indexOF])
    }
    getEraseById(indexOF){
        console.log(delete this.#products[indexOF])
        }
        
    getUpdateById(indexOF,title, description, code, price, thumbnail, stock){
        const UpdateProduct ={
            id: indexOF-1,
            title,
            description,
            code,
            price,
            thumbnail,
            stock
        };
        this.#products[indexOF-1] = {...this.#products[indexOF], UpdateProduct}
        }

}

const manager = new ProductManager(); 
manager.addProduct("Manzana","Es una manzana", "codigo1",5,"/ruta/2",2);
manager.addProduct("Banana","Es una banana", "codigo2",6,"/ruta/3",3);
manager.addProduct("Cereza","Es una cereza", "codigo3",4,"/ruta/1",1);
manager.getProduct();
manager.getProductById(0);