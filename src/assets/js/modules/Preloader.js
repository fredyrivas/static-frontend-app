const imagesloaded = require('imagesloaded')

class Preloader{

    constructor (options){
        
        this.init()
        this.onPreloadCompleteInt = new Function()
    }
    

    init(){
        imagesloaded('#site', ()=>{
            this.onPreloadCompleteInt()
            TweenMax.to('#preloader', .5, {autoAlpha:0});
        })
    }

    showPreloader(){
        TweenMax.to('#preloader', .5, {autoAlpha:1});
    }
    hidePreloader(){
        TweenMax.to('#preloader', .5, {autoAlpha:0});
    }

    onPreloadComplete(obj){
        this.onPreloadCompleteInt = obj.callback
    }
}


export default Preloader;