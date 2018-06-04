var classNames = [
    '.recipe',
	'.innerrecipe',
	'.easyrecipe',
    '.recipe-content',
	'.recipe-summary.wide',
	'.wprm-recipe-container',
	'.wprm-recipe',
	'.wprm-recipe-simple',
    '.cookbook-recipe',
	'.recipe-callout',
	'.tasty-recipes',
    '.food-card',
    '.recipebody',
	'div[itemtype="http://schema.org/Recipe"]',
	'div[itemtype="https://schema.org/Recipe"]',
];

function show(){
    classNames.every(function(e){
		let recipe = $(e);
		if( recipe && recipe.length === 1 && !isOnScreen(recipe)){
			recipe.addClass('popupRecipe_ext');
			recipe.append('<button class="closeBtn_ext">x</button>');
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
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = el.offset();
    bounds.right = bounds.left + el.outerWidth();
    bounds.bottom = bounds.top + el.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

chrome.storage.sync.get(document.location.hostname, function(items) {
	show();
	$('.closeBtn_ext').click(function(){
		hide();
	});
});

