const fs = require('fs');
const path = require('path');

module.exports = class Product {
    constructor(t){
        this.title = t;
    }

    save(){
        const p = path.join(require.main.filename, 'data' , 'product.json')
        const product = [];
        fs.readFile(p,(err,fileContent) =>{
            if(!err) {
                product = JSON.parse(fileContent);
                
            }
            product.push(this);
            fs.writeFile(p,JSON.stringify(product),(err)=>{
                console.log(err);
            });
        })
        
    }

    static fetchAll(){
        const p = path.join(require.main.filename, 'data' , 'product.json')

        fs.readFile(p , (err,fileContent)=>{
            if(err){
                return [];
            }
            return JSON.parse(fileContent);
        });
        // return products;
    }
}