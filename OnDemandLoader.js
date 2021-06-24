const onDemandLoader = function () {
    this.require = (src, cb=null) => {
        return new Promise((resolve, reject) =>{
            let scriptFile = document.createElement('script');
            scriptFile.src = src;
            scriptFile.onload = cb == null ? resolve : cb;
            scriptFile.onerror = reject;
            document.body.appendChild(scriptFile);
        });
    }
}