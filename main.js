var profiles = [
    {name:"Aswin", photos:["a","b"]},
    {name:"kumar",photos:["c","d","e","f","g"]}];

var rand = Math.random();

var profile = rand > 0.5 ? profiles[1] : profiles[0];


const addHTML = function(){
    console.log("------------in cb ---------------")
    console.log(WDSlider1)
    console.log("------------in cb ---------------")
}

const errCb = () => {
    console.log("in err cb")
}

if(profile.photos.length > 4){
    console.log(profile)


    if(!window.Promise){
        onDemandLoader.require("WDSlider.js")
        .then(response =>{
            console.log("------------in promise ---------------")
            console.log(response);
            var WDslider = new WDSlider();
            console.log(WDslider);
            console.log("------------in promise ---------------")
        })
        .catch(err => console.error(err))

        onDemandLoader.require("WDSlider1.js")
        .then(response =>{
            console.log("response", response);
            var WDslider = new WDSlider1();
            console.log(WDslider);
        })
        .catch(err => console.error(err))
    }
    else{
        try{
            let va = onDemandLoader.require("WDSlider1.js",addHTML, errCb)
            console.log(va);
        }
        catch(err){
            console.error(err)
        }
    }
}
else{
    console.log(profile)
}