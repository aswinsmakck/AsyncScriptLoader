const onDemandLoader = (function () {

    const require = (src, successCb = null, errorCb = null) => {
        let promise;
        let scriptFile = document.createElement('script');
        scriptFile.src = src;
        scriptFile.defer = true;
        document.body.appendChild(scriptFile);
        try{
            if(successCb){
                scriptFile.onload = (evt) => {
                    successCb();
                };
                scriptFile.onerror = (evt) => {
                    if(errorCb) errorCb();
                    document.body.removeChild(scriptFile);
                };
            }
            else{ 
                promise =  new Promise((resolve, reject) => {
                    scriptFile.onload = (evt) => {
                        promise = resolve(evt);
                    };
                    scriptFile.onerror = (evt) => {
                        promise = reject(evt);
                        document.body.removeChild(scriptFile);
                    };
                });
            }

            return promise;
        }catch(err){console.log(err); throw err;}

    }

    return {require : require}
})();