// side-navbar
$('.side .bar').click(function(){
    let boxSide= $('.ul-list').outerWidth()
    let position =$('.side').offset().left;
    if(position==0){
        $('.side').css({
        left:`-${boxSide}px`,
        transition:'all 0.7s ease-in-out'
    })
}
    else{
        $('.side').css({
            left:'-0px',
            transition:'all 0.7s ease-in-out'
        }) 
    }
})


//search
$('.link2').click(function(){
     $('.search').fadeIn(1000)
})
var arr=[];
//category
async function ctgry(){
    let getCtgry=await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    let resultCat=await getCtgry.json()
    arr=resultCat.categories
    console.log(arr);
    //getMeals()
}
ctgry()

//display-category
 $('.link3').click(function(){
    let box='';
    for(var i=0; i<arr.length; i++){
        box+=`
        <div class="col-md-3">
        <div class="m-3 rounded">
        <img src="${arr[i].strCategoryThumb}" class="w-100 shadow-lg rounded-2 p-2">
         </div>
    </div>
        `
           
    }
    document.getElementById('ctgry').innerHTML=box;
  })


// function getMeals(){
//     var box='';
//     for(var i=0;i<arr.length;i++){
//         box+=` <div class="col-md-3">
//         <div>
//             <h1>${arr[i].strCategory}</h1>
//         </div>
//     </div>`
//     }
//     document.getElementById('ctgry').innerHTML=box;
// }

//area
let Meals=[];
async function getArea(){
    let area = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    let resultArea=await area.json()
    Meals=resultArea.meals
    console.log(Meals);
}
getArea()
//display area
$('.link4').click(function(){
    let cols='';
    for(var i=0; i<Meals.length; i++){
        cols+=`
        <div class="col-md-3">
        <div class="icon m-3 rounded w-100 shadow-lg p-5 text-center">
        <i class="fa-solid fa-city fa-3x text-danger mb-2"></i>
        <h3 class="text-white">${Meals[i].strArea}</h3>
         </div>
    </div>
        `
           
    }
    document.getElementById('meal').innerHTML=cols;
  })

//ingrediant
let data=[];
async function getIngrdint(){
    let ing = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
    let resulting=await ing.json()
    data=resulting.meals
    console.log(data);
}
getIngrdint()

//display ingrediants
$('.link5').click(function(){
    let x='';
    for(var i=0; i<20; i++){
        x+=`
        <div class="col-md-3">
        <div class="icon m-3  rounded w-100 h-75 shadow p-5 text-center">
        <i class="fa-solid fa-bowl-food fa-3x mb-2"></i>
        <h3 class="text-white text-capitalize">${data[i].strIngredient}</h3>
        <p class="text-white">${data[i].strDescription.split(" ").splice(0,15).join(" ")}</p>

         </div>
    </div>
        `     
    }
    document.getElementById('ingrdint').innerHTML=x;
  })
// contact
$('.link6').click(function(){
    $('.contact').fadeIn(1000)
})