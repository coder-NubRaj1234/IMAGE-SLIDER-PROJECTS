const sliders = document.querySelectorAll(".slider");
const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");

sliders.forEach(function(slider , index){
    slider.style.left = `${index * 100}%`;
});

let counter = 0;

prevBtn.addEventListener('click' , function(){
    counter--;
    translate();
});
nextBtn.addEventListener('click' , function(){
    counter++;
    translate();
});
function translate(){
    if(counter <= 0 ){
        prevBtn.style.display = "none";
    }else{
        prevBtn.style.display = "block";
    };
    if(counter < sliders.length - 1 ){
        nextBtn.style.display = "block";
    }else{
        nextBtn.style.display = "none";
    };
    sliders.forEach(function(slider){
        slider.style.transform = `translateX(-${counter * 100 }%)`;
    });
    console.log(counter , sliders.length)
};

prevBtn.style.display = "none";

