const functions=require('./functionalities/addproduct')
const display=require('./functionalities/displaydata')
const loaddata=require('./insertSampleData')
const editdata=require('./functionalities/editdata')
const getCount=require('./getproductcount')


//By default task 3 result are displayed, point no 6 in app.js

/*

Run function belonging to only one point per run for each below point for best results.
like of you are running insertdata() then please comment all the other function call.
Thanks

*/


//1.    call this function to load sample data in product   and category model(collection)
    //data is loaded by default, do not call this function unless you have called  editdata.deleteaAllProduct()
    //loaddata.insertData()


//2.    call this function addProduct for inserting data into the product model(collection) by providing name,category
    //functions.addProduct('laptop','Electronics')


//3.    call these function to show all the data available in product  and category model(collection)
    //display.showProduct();
    //display.showCategory();



//4.    call this function to clear all the data available in product and category  model(collection)
    //editdata.deleteaAllProduct()


//5.  TASK 2 SOLUTION  
    //call this function by providing a category to remove that category from database and the corresponding products
//editdata.deletecategory('Beauty')


//6.  TASK 3 SOLUTION  
    //call this function to get count of product per category
getCount.getProdCount()

