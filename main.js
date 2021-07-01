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


    if(window.Promise){
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
        let va = onDemandLoader.require("WDSlider1.js",addHTML, errCb)
        console.log(va);
    }
}
else{
    console.log(profile)
}


/*let val = 0;
const clickHandler =(evt) =>{ 
    let pr = new Promise((re, rej) =>{

        if(val > 0){
            rej()
        }
        else{
            re();
        }
    });

    val +=1;
    console.log(pr);
}
*/


/*console.log(document.querySelector("#as"));

var clickHandler = (evt) => {
    console.log("evt")
}


var prom = new Promise((resolve, reject) => {
document.querySelector("#as").addEventListener("click", clickHandler)
resolve();
});

prom.then(res => console.log(12));

setinterval 
*/