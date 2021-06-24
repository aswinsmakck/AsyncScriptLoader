var profiles = [
    {name:"Aswin", photos:["a","b"]},
    {name:"kumar",photos:["c","d","e","f","g"]}];

var rand = Math.random();

var profile = rand > 0.5 ? profiles[1] : profiles[0];


const addHTML = function(){
    console.log(WDSlider)
}

if(profile.photos.length > 4){
    console.log(profile)

    const onDemandLoaderObj = new onDemandLoader();
    onDemandLoaderObj.require("WDSlider.js",addHTML)
    .then(response =>{
        console.log(response);
        var WDslider = new WDSlider();
        console.log(WDslider);
    })
    .catch(err => console.err(err))
    onDemandLoaderObj.require("WDSlider1.js",addHTML)
    .then(response =>{
        console.log(response);
        var WDslider = new WDSlider();
        console.log(WDslider);
    })
    .catch(err => console.err(err))
}
else{
    console.log(profile)
}