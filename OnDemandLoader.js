const onDemandLoader = function () {

    this.require = (src, cb=null) => {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                let scriptFile = document.createElement('script');
                scriptFile.src = src;
                scriptFile.onload = cb == null ? resolve : cb;
                scriptFile.onerror = reject;
                scriptFile.defer = true;
                document.body.appendChild(scriptFile);
            }, 0);
        });
    }
}