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
    var fileRequired = (async function(){
        const onDemandLoaderObj = new onDemandLoader();
        var jsFile = await onDemandLoaderObj.require("WDSlider.js",addHTML)
        console.log(jsFile);
        var WDslider = new WDSlider();
        console.log(WDslider);
    })();
}
else{
    console.log(profile)
}