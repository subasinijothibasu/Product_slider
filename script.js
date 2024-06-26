const imgs = document.querySelectorAll('.img a');
const imgDiv=document.querySelectorAll('.img');
let imgId=1;

imgs.forEach((img)=>{
    img.addEventListener('click',(e)=>{
    e.preventDefault();
    imgId=img.dataset.id;

    imgDiv.forEach((img)=>{
        img.classList.remove('active');
    });


    img.parentElement.classList.add('active')
    console.log(imgId);
    moveImage();
    });
});



function moveImage(){
const imgWidth=document.querySelector('.main-image img:first-child').clientWidth; //first-child , for selecting first image only , clientWidth for fetching the width of the particular image or div.
console.log(imgWidth);//485 - width=485px;

let movingWidth = (imgId-1)*imgWidth  // formula for calculating the width of all images
console.log(movingWidth);
const imgFrame=document.querySelector('.main-image');
//const imgFrame=document.querySelectorAll('.main-image')[0];  we can also use querySelectorAll but we must mention the location(index) [0].
imgFrame.style.transform=`translateX(${-movingWidth}px)`;
}

const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const qtytext=document.querySelector('#qty');

minusBtn.addEventListener('click',()=>{
    let quantity = parseInt(qtytext.value);
    if(quantity>0){
        quantity--;
        qtytext.value=quantity;
    }
});

//Quantity button
plusBtn.addEventListener('click',()=>{
    let quantity = parseInt(qtytext.value);
    if(quantity>=0 && quantity<5){
        quantity++;
        qtytext.value=quantity;
    }
});