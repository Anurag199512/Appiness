const mongodb=require('mongodb');
const Mongoclient=mongodb.MongoClient;

//connection parameter
const connectionUrl='mongodb+srv://anurag:nature12@cluster0-qlkny.mongodb.net/test?retryWrites=true&w=majority';
const databaseName='AppinessShop';


//displays the count of each product under each category
function getProdCount(){

        Mongoclient.connect(connectionUrl,{useUnifiedTopology:true},(error,client)=>{

            //if connection failes then return a error message
            if(error)
                {
                    return console.log("Cannot connect to the Mongo DB");
                }

            //creating a database for our data
            let db=client.db(databaseName);
            
            db.collection('category').find({}).toArray((error,response)=>{

                if(response.length==0){
                    console.log(`Category list is empty`);
                }
                else
                {
                    //console.log('Category \t\t Count of Products')
                    console.log('\n');
                    response.forEach((category)=>{
                        db.collection('products').find({category:category.name}).toArray((error,res)=>{
                            if(error)
                                return console.log('Data cannot be retrieved');
                            
                            console.log(+res.length+' products are present under category: '+category.name);
                        })
                    })
                }
            })      
    })
}


module.exports={
    getProdCount:getProdCount
}