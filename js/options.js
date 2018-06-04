chrome.storage.sync.get(null, function(data){
    $('#attr').hide();
    $('#attrHover').hover(function(){
        $('#attr').show();
    })
})