export class Product {
    productId: string;
    productName: string;
    productPrice: number;

    constructor() {
        this.productId = null;
        this.productName = null;
        this.productPrice = null;
    }

    static get getProducts(): Product[] {
        const products = [
            { productId: '1', productName: 'Galaxy Note10+ 5G', productPrice: 11299.99,  productImg:"src/app/assets/shopping.png"  },
            { productId: '2', productName: '7T Pro 5G McLaren', productPrice:11223,  },
            { productId: '3', productName: 'iPhone 11 Pro Max', productPrice: 11099.99 },
            { productId: '4', productName: 'iPhone 11 Pro', productPrice: 11999.99 },
            { productId: '5', productName: 'iPhone 11', productPrice: 11699.99 },
            { productId: '6', productName: 'Galaxy Note10', productPrice: 11949.99 },
            { productId: '7', productName: 'Galaxy Note10+', productPrice: 11099.99 },
            { productId: '8', productName: 'Galaxy S10e', productPrice: 11749.99 },
            { productId: '9', productName: 'Galaxy S10', productPrice: 11899.99 },
        ] as Product[];
        return products;
    }
}
