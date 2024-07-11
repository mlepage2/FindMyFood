
import { Context, Contract, Info, Returns, Transaction } from 'fabric-contract-api';
import { Product } from './product';

@Info({title: 'SupplyChainContract', description: 'Smart contract for CRUD a product' })
export class SupplyChainContract extends Contract {

    @Transaction()
    public async createProduct(ctx: Context, id: string, barcode: string, name: string, placeOfOrigin: string, productionDate: string, expirationDate: string, quantity: number, unit: string, batch: string, category: string, variety: string, misc: string): Promise<Product> {
        const product = new Product();
        product.id = id;
        product.barcode = barcode;
        product.name = name;
        product.placeOfOrigin = placeOfOrigin;
        product.productionDate = productionDate;
        product.expirationDate = expirationDate;
        product.quantity = quantity;
        product.unit = unit;
        product.batch = batch;
        product.category = category;
        product.variety = variety;
        product.misc = misc;

        await ctx.stub.putState(id, Buffer.from(JSON.stringify(product)));
        return product;
    }

    @Transaction(false)
    @Returns('Product')
    public async readProduct(ctx: Context, id: string): Promise<Product> {
        const productJSON = await ctx.stub.getState(id);
        if (!productJSON || productJSON.length === 0) {
            throw new Error(`The product ${id} does not exist`);
        }
        return JSON.parse(productJSON.toString()) as Product;
    }

    @Transaction()
    public async updateProduct(ctx: Context, id: string, barcode: string, name: string, placeOfOrigin: string, productionDate: string, expirationDate: string, quantity: number, unit: string, batch: string, category: string, variety: string, misc: string): Promise<Product> {
        const product = new Product();
        product.id = id;
        product.barcode = barcode;
        product.name = name;
        product.placeOfOrigin = placeOfOrigin;
        product.productionDate = productionDate;
        product.expirationDate = expirationDate;
        product.quantity = quantity;
        product.unit = unit;
        product.batch = batch;
        product.category = category;
        product.variety = variety;
        product.misc = misc;

        await ctx.stub.putState(id, Buffer.from(JSON.stringify(product)));
        return product;
    }

    @Transaction()
    public async deleteProduct(ctx: Context, id: string): Promise<void> {
        await ctx.stub.deleteState(id);
    }
}
