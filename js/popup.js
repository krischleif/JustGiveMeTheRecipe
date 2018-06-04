var classNames = [
	'div[itemtype="http://schema.org/Recipe"]',
	'div[itemtype="https://schema.org/Recipe"]',
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
    '.recipebody'
];

function show(){
    classNames.every(function(e){
		let recipe = $(e);
		if( recipe && recipe.length === 1 ){
			recipe.addClass('popupRecipe_ext');
			recipe.append('<button class="closeBtn_ext">x</button>');
			$(window).scrollTop(0);
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

chrome.storage.sync.get(document.location.hostname, function(items) {
	show();
	$('.closeBtn_ext').click(function(){
		hide();
	});
});

