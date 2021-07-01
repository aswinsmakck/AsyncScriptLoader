const onDemandLoader = (function () {

    const require = (src, successCb = null, errorCb = null) => {
        let promise;
        let scriptFile = document.createElement('script');
        scriptFile.src = src;
        scriptFile.defer = true;
        document.body.appendChild(scriptFile);

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
                    resolve(evt);
                };
                scriptFile.onerror = (evt) => {
                    reject(evt);
                    document.body.removeChild(scriptFile);
                };
            });
        }

        return promise;

    }

    return {require : require}
})();