const mongodb=require('mongodb')
const Mongoclient=mongodb.MongoClient

const connectionUrl='mongodb+srv://anurag:nature12@cluster0-qlkny.mongodb.net/test?retryWrites=true&w=majority'
const databaseName='AppinessShop'


function addProduct(name='',category=''){
        if(name=='' && category=='')
            return console.log('\nPlease give both productName and category in the function addProduct.')
        else if(name=='')
            return console.log('\nPlease give value for  productName in the function addProduct.')
        else if(category=='')
            return console.log('\nPlease give value for  category in the function addProduct.')

        Mongoclient.connect(connectionUrl,{useUnifiedTopology:true},(error,client)=>{

            //if connection failes then return a error message
            if(error)
                {
                    return console.log("Cannot connect to the Mongo DB")
                }

            //creating a database for our data
            let db=client.db(databaseName)    
            
            db.collection('products').find({name:name,category:category}).toArray((error,response)=>{

                if(response.length==0){
                    db.collection('products').insertOne({
                        'name':name,
                        'category':category
                    })
                    console.log(`Product added with value name:${name} and category:${category}`)
                }
                else
                {
                    console.log('Product with these values already present')
                }
            })

         


        db.collection('category').find({name:category}).toArray((error,response)=>{
            
            if(response.length==0){
                db.collection('category').insertOne({'name':category})
            }
        })


    })

}



module.exports={
    addProduct:addProduct
}