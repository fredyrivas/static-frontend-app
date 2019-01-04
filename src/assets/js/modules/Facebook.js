var loadFbSdk = require('load-fb-sdk');
var fbInitOpts = {
    appId: 'xxxxxxxxxxxx',
    version: 'v3.2',
};


class Facebook{

    constructor (options){
        
        this.init()
        
    }
    

    init(){
        window.__LOAD_FB_SDK = fbInitOpts;
    }

    loadFacebook(){

        console.log('loading facebook api');

        loadFbSdk( (err, FB) => {
            if (err) {
                return console.log(err);
            }

            console.log('facebook loaded');
        })
    }

    shareOnFacebook(){

        FB.ui({
            method: 'share',
            hashtag: "#",
            quote: " Bla bla bla",
            href: this.playerURL,
        }, function (response) { });
    }

    
}


export default Facebook;