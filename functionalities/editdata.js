const mongodb=require('mongodb')
const Mongoclient=mongodb.MongoClient

const connectionUrl='mongodb+srv://anurag:nature12@cluster0-qlkny.mongodb.net/test?retryWrites=true&w=majority'
const databaseName='AppinessShop'


function deleteaAllProduct(){

    Mongoclient.connect(connectionUrl,{useUnifiedTopology:true},(error,client)=>{

        //if connection failes then return a error message
        if(error)
            {
                return console.log("Cannot connect to the Mongo DB")
            }

        //connecting to the database to  fetch the product list
        let db=client.db(databaseName)    

        db.collection('products').deleteMany({},(error,response)=>{
                if(error)
                    return console.log('\nDeletion was not performed')
                
                //console.log(response)
                if(response.deletedCount==0)
                    console.log('\nProduct collection is already empty.')
                else
                    console.log('\nProduct collection emptied,',response.deletedCount,'records were deleted.')
 
        })

        db.collection('category').deleteMany({},(error,response)=>{
            if(error)
                return console.log('\nDeletion was not performed')
            
            //console.log(response)
            if(response.deletedCount==0)
                console.log('\Category collection is already empty.')
            else
                console.log('\Category collection emptied,',response.deletedCount,'records were deleted.')

    })
        
      
    })

}

function deletecategory(cat_name){

    Mongoclient.connect(connectionUrl,{useUnifiedTopology:true},(error,client)=>{

        //if connection failes then return a error message
        if(error)
            {
                return console.log("Cannot connect to the Mongo DB")
            }

        //connecting to the database to  fetch the product list
        let db=client.db(databaseName)    

        db.collection('category').deleteOne({name:cat_name},(error,response)=>{
                if(error)
                    return console.log('\nDeletion was not performed')
                
                //console.log(response)
                if(response.deletedCount==0)
                    console.log('\nMentioned category is not present in the list')
                else
                    {
                        console.log('\nCategory,',cat_name,'removed from the list.')
                    }        
        })

        db.collection('products').deleteMany({category:cat_name},(error,response)=>{
            if(error)
                return console.log('\nDeletion was not performed')
            
            //console.log(response)
            if(response.deletedCount==0)
                console.log('No product available for the given category',cat_name)
            else
            console.log('Product corresponding to category ',cat_name,'are removed.')

    })
        
      
    })

}

module.exports={
    deleteaAllProduct:deleteaAllProduct,
    deletecategory:deletecategory
}

