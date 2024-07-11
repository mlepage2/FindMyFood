import { Object as FabricObject } from 'fabric-contract-api';

@FabricObject()
export class Product {
    id: string;
    barcode: string;
    name: string;
    placeOfOrigin: string;
    productionDate: string;
    expirationDate: string;
    quantity: number;
    unit: string;
    batch: string;
    category: string;
    variety: string;
    misc: string;
}
