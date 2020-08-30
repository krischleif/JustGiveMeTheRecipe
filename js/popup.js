var classNames = [
	'.recipe-wrapper',
	'.tabbox',
	'.innerrecipe',
	'.easyrecipe',
    '.recipe-content',
	'.recipe-summarywide',
	'[attribute*="container-recipe"]',
	'.wprm-recipe-container',
	'.wprm-recipe',
	'.wprm-recipe-simple',
    '.cookbook-recipe',
	'.recipe-callout',
	'.tasty-recipes',
    '.food-card',
	'.recipebody',
	'.wprm-recipe',
	'#wpurp-container-recipe-10155',
	'div[itemtype="http://schema.org/Recipe"]',
	'div[itemtype="https://schema.org/Recipe"]',
	'.recipe_card'
];

function show(){
    classNames.forEach(function(e){
		let recipe = $(e);
		if( recipe && recipe.length === 1 && !isOnScreen(recipe)){
			recipe.addClass('popupRecipe_ext');
			recipe.append('<button class="closeBtn_ext">x</button>');
			$('html,body').scrollTop(0);
			return false;
		}
		return true;
	});
}

function hide()
{
	$('.popupRecipe_ext').removeClass('popupRecipe_ext');
	$('.closeBtn_ext').hide();
}

function isOnScreen(el){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
		left : win.scrollLeft(),
		right: win.scrollLeft() + win.width(),
		bottom: win.scrollTop() + win.height()
    };

    var bounds = el.offset();
    bounds.right = bounds.left + el.outerWidth();
    bounds.bottom = bounds.top + el.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

chrome.storage.sync.get("JGMTRDisabled", function(e) {
    if(e.JGMTRDisabled === undefined){
        chrome.storage.sync.set({"JGMTRDisabled" : false})
        $('#powerBtn').removeClass('disabled');
		show();
    }
	if(e.JGMTRDisabled === false){
		show();
	}
	$('.closeBtn_ext').click(function(){
		hide();
	});
	$('body').bind('click', function(e){
		if($(e.target).closest(".popupRecipe_ext").length === 0 || $(e.target).is('.popupRecipe_ext')){
			hide();
		}
	})
});

