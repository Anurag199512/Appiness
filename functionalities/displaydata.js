const mongodb=require('mongodb')
const Mongoclient=mongodb.MongoClient

const connectionUrl='mongodb+srv://anurag:nature12@cluster0-qlkny.mongodb.net/test?retryWrites=true&w=majority'
const databaseName='AppinessShop'


function showProduct(){

        Mongoclient.connect(connectionUrl,{useUnifiedTopology:true},(error,client)=>{

            //if connection failes then return a error message
            if(error)
                {
                    return console.log("Cannot connect to the Mongo DB")
                }

            //connecting to the database to  fetch the product list
            let db=client.db(databaseName)    

            db.collection('products').find({}).toArray((error,response)=>{
                    if(error || response.length==0)
                        return console.log('\nRecord cannot to fetched from the collection or collection is empty')
                                           
                    console.log('\nProduct collection\n')
                    console.log('Name\t\t\t\tCategory')
                    console.log('-----------------------------')
                    response.forEach((prod)=>{
                        console.log(prod.name+'\t\t\t\t'+prod.category)
                    })
            })
            
          
        })

}


function showCategory(){

    Mongoclient.connect(connectionUrl,{useUnifiedTopology:true},(error,client)=>{

        //if connection failes then return a error message
        if(error)
            {
                return console.log("Cannot connect to the Mongo DB")
            }

        //connecting to the database to  fetch the product list
        let db=client.db(databaseName)    

        db.collection('category').find({}).toArray((error,response)=>{
                if(error || response.length==0)
                    return console.log('\nRecord cannot to fetched from the collection or collection is empty')
                                       
                console.log('\nCategory collection\n')
                console.log('Name')
                console.log('-----------------------------')
                response.forEach((prod)=>{
                    console.log(prod.name)
                })
        })
        
      
    })

}



module.exports={
    showProduct:showProduct,
    showCategory:showCategory
}