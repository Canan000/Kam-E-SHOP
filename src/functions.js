// https://github.com/users/linnnux/projects/16/views/1?layout=board&pane=issue&itemId=20837820
function helloMessage()
{
    //write code here
    //@params id = 'helloMessage'
    console.log('execute helloMessage');
}

function displayMainTitle()
{
  //display the head title on id 'headMainTitle'
  //display the main title on id 'mainTitle'

  document.getElementById('mainTitle').innerHTML = 'Kam -eShop';
  console.log('execute displayMainTitle');
}

function displayCategoryContent(categoryId, categoryContent)
{

  // @params = #id = maybe category1, category2 or category3
  console.log(categoryContent) ;
  document.getElementById(categoryId).innerHTML = categoryContent;
  console.log('execute displayCategoryContent');
}


async function getOneProduct() 
{
  let myPromise = new Promise(function(resolve) 
  {
    let req = new XMLHttpRequest();
    req.open('GET', "https://fakestoreapi.com/products/2");
    req.onload = function() 
    {
      if (req.status == 200) 
      {
        resolve(req.response);
      } 
      else 
      {
        resolve("File not Found");
      }
    };
  req.send();
 });

  let data = await myPromise;
  console.log( JSON.parse(data));

  displayOneProduct('category1', JSON.parse(data))
}
            
function displayOneProduct(categoryId, data)
{

  console.log(categoryContent) ;
  let productContent = `<h3>TITLE ${data.title} </h3>
      <h3>Price</h3> :  ${data.price}
    
      <h3>Description</h3><p>${data.description}</p>
     <p>Rating : ${data.rating.rate}</p>
     
        <img src=" ${data.image}">
     


  `
  document.getElementById(categoryId).innerHTML = productContent;
  console.log('execute displayCategoryContent');
}
        

function getAllProducts(categoryId, data)
{
  // will get all product 



  // loop all product 

    // displayOneProduct(categoryId, data);

}