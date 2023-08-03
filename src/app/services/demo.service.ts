import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from '../domain/product';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  lstProductos=new Array()

  productsCollection: AngularFirestoreCollection<Product>;

  products: any;

  constructor(private afs: AngularFirestore)  {
    //colleccion del firebase, usar esos nombres entre ''
    this.productsCollection = afs.collection<Product>('productos');
   }

  addProduct(product: Product){-
    this.lstProductos.push(product);
  }
  removeProduct(product: Product){
    console.log(this.lstProductos.lastIndexOf(product));
    this.lstProductos.splice(this.lstProductos.lastIndexOf(product),1);
    
  }
  replaceProduct(product: Product){
    console.log(this.lstProductos.lastIndexOf(product));
    this.lstProductos.splice(this.lstProductos.lastIndexOf(product),1);
    
  }
  getProducts(){
    return this.lstProductos;
  }
  addProductFire(product: Product){
    const id = this.afs.createId();
    product.uid=id;
    this.productsCollection.doc(id).set(Object.assign({},product));
  }
  getProductsFire(){
    return  this.productsCollection.valueChanges();
  }
}
