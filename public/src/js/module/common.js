define([], function() {

    return {
        getHashParam: function() {
            var hash = window.location.hash.slice(1);
            var hashArray = hash.split('&');
            var hashObj = {};
            hashArray.map(function(item) {
                var keyValue = item.split("=");
                hashObj[keyValue[0]] = keyValue[1];
            });
            return hashObj;
        },
        buildParam: function(obj) {
            var param = "";
            for(var key in obj){
                if(obj[key] != undefined){
                    param += "&" + key + "=" + obj[key]; 
                } 
            }
            return param.slice(1);
        }
    }
    
})