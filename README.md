1.  Starting file for the following code is app.js
    
    ```
     First run npm install or yarn install to install all the dependencies
     Either you can use nodemon app.js  or node app.js
    
    ```

2. By default sample data is loaded in the database from the file (insertSampleData.js).

    `Call this function insertSampleData() only once incase reload is required after deleting the database comletely.`


3. To delete all the data call function                    
     `deleteaAllProduct defined in editdata.js`


4. For inserting a new value of product call function 

   `addProduct(PRODUCT_NAME,CATEGORY_NAME) defined in addproduct.js`

5. To display the current content of category or product collection call function 

    `showCategory() or showProduct() from displaydata.js`

6. Task 2 : If a category is removed then all its corresponding product should also be deleted
    
    ```To verify this 
    a)first call function deletecategory(CATEGORY_NAME)
    b) call showCategory() and showProduct()
    ```

7. Task  3 : To  get the count of product in each category
    
    `call function getProdCount() defined in getproductcount.js`


8. All of the function call mentioned above are already coded and commented as of now in app.js. 

    `To verify just uncomment that function call and run the code result will be printed.`

9. Functions such as  ` insertSampleData(), deleteaAllProduct() should be ran in isolation`


