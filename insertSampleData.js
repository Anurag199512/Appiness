const mongodb=require('mongodb');
const Mongoclient=mongodb.MongoClient;

//connection parameter
const connectionUrl='mongodb+srv://anurag:nature12@cluster0-qlkny.mongodb.net/test?retryWrites=true&w=majority';
const databaseName='AppinessShop';


//this will load the  database with a default set of data.CAll only once
function insertData(){

        Mongoclient.connect(connectionUrl,{useUnifiedTopology:true},(error,client)=>{

            //if connection failes then return a error message
            if(error)
                {
                    return console.log("Cannot connect to the Mongo DB");
                }

            //creating a database for our data
            let db=client.db(databaseName);    
            
            db.collection('products').insertOne({
                'name':'Santoor',
                'category':'Soap'
            },(error,response)=>{
                
                if(error|| response.ops.length==0)
                    return console.log('data was not loaded');
                 
            });

            db.collection('products').insertMany([
                {'name':'Lux','category':'Soap'},
                {'name':'Dove','category':'Soap'},
                {'name':'Cinthol','category':'Soap'},
                {'name':'Surf Excel','category':'Washing Powder'},
                {'name':'Ariel','category':'Washing Powder'},
                {'name':'Tide','category':'Washing Powder'},
                {'name':'Rin','category':'Washing Powder'},
                {'name':'Perfume','category':'Fashion'},
                {'name':'Powder','category':'Fashion'},
                {'name':'Creams','category':'Fashion'}
            ],(error,response)=>{
                if(error|| response.ops.length==0)
                    return console.log('data was not loaded');
            });

            db.collection('category').insertMany([
                {'name':'Fashion'},
                {'name':'Washing Powder'},
                {'name':'Soap'}
            ]);
            
            console.log('Sample data loaded for both product and category model......');
    })

}



module.exports={
    insertData:insertData
}