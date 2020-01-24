const functions=require('./functionalities/addproduct')
const display=require('./functionalities/displaydata')
const loaddata=require('./insertSampleData')
const editdata=require('./functionalities/editdata')
const getCount=require('./getproductcount')



//1.    call this function addProduct for inserting data into the product model(collection) by providing name,category
    //functions.addProduct('laptop','Electronics')


//2.    call these function to show all the data available in product  and category model(collection)
    //display.showProduct();
    //display.showCategory();



//3.    call this function to clear all the data available in product and category  model(collection)
    //editdata.deleteaAllProduct()


//4.    call this function to load sample data in product   and category model(collection)
    //loaddata.insertData()


//5.  TASK 2 SOLUTION  
    //call this function by providing a category to remove that category from database and the corresponding products
//editdata.deletecategory('Beauty')


//6.  TASK 3 SOLUTION  
    //call this function by providing a category to get the count of product belonging to that category
getCount.getProdCount()

