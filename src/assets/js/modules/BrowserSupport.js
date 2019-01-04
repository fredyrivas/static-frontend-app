class BrowserSupport{

    constructor(options){
        
        this.versions = options.versions
        this.container = options.container
        
        this.checkBrowser()
    }

    checkBrowser(){
        var getBrowserInfo = function() { var ua= navigator.userAgent, tem, M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; if(/trident/i.test(M[1])){ tem= /\brv[ :]+(\d+)/g.exec(ua) || []; return 'IE '+(tem[1] || ''); } if(M[1]=== 'Chrome'){ tem= ua.match(/\b(OPR|Edge)\/(\d+)/); if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera'); } M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?']; if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]); return M.join(' '); };
        
        var browserinfo = getBrowserInfo()
        var browsersplit = browserinfo.split(" ")
        var browsername = browsersplit[0]
        var browserversion = browsersplit[1]
        

        switch (browsername) {
            case 'Chrome':
                if(browserversion <= this.versions.ch){
                    $(this.container).show()
                }
                break;
            case 'Safari':
                if(browserversion <= this.versions.sa){
                    $(this.container).show()
                }
                break;
            case 'Firefox':
                if(browserversion <= this.versions.fi){
                    $(this.container).show()
                }
                break;
            case 'Opera':
                if(browserversion <= this.versions.op){
                    $(this.container).show()
                }
                break;
            case 'MSIE':
                if(browserversion <= this.versions.msie){
                    $(this.container).show()
                }
                break;
        }
    }
}

export default BrowserSupport;