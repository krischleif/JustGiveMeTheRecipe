chrome.storage.sync.get("JGMTRDisabled", function(data){
    if(data.JGMTRDisabled === true){
        $('#powerBtn').addClass('disabled');
        chrome.browserAction.setIcon({path: '../img/recipe-book-gray.png'}, function(e){})
    }
    $('#attr').hide();
    $('#attrHover').hover(function(){
        $('#attr').show();
    })
    $('#powerBtn').click(function(){
        toggleRun();
    })

})

function toggleRun(){
    chrome.storage.sync.get("JGMTRDisabled", function(e){
        if(e.JGMTRDisabled == false){
            chrome.storage.sync.set({"JGMTRDisabled" : true})
            $('#powerBtn').addClass('disabled');
            chrome.browserAction.setIcon({path: '../img/recipe-book-gray.png'}, function(e){})
        }
        else if(e.JGMTRDisabled == true){
            chrome.storage.sync.set({"JGMTRDisabled" : false})
            $('#powerBtn').removeClass('disabled');
            chrome.browserAction.setIcon({path: '../img/recipe-book.png'}, function(e){})
        }
    })
}