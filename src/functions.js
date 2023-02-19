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
  document.getElementById(categoryId).innerHTML = categoryContent;
  console.log('execute displayCategoryContent');
}