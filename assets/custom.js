/* Update line item property color labels */ 
function update_label(el) { 
  var labelid = el.getAttribute('data-labelinfo');
  var labelidmodal = labelid + '-modal';
  var labelvalue = el.value;
  if(document.getElementById(labelidmodal)) {
    document.getElementById(labelidmodal).innerHTML = labelvalue;
  } else {
    document.getElementById(labelid).innerHTML = labelvalue;
  }  
}  


/* Accordion style FAQ content */
var faq = document.getElementsByClassName("faq-q");
var faqcount;
for (faqcount = 0; faqcount < faq.length; faqcount++) {
    faq[faqcount].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}

function faq_expand() {
for (faqcount = 0; faqcount < faq.length; faqcount++) {
    faq[faqcount].classList.add("active");
    faq[faqcount].nextElementSibling.classList.add("show");
  }
}

function faq_collapse() {
for (faqcount = 0; faqcount < faq.length; faqcount++) {
    faq[faqcount].classList.remove("active");
    faq[faqcount].nextElementSibling.classList.remove("show");
  }
}


/* Select validation of options upon add to cart */
function select_validate(orderbtn) { 	      
		var nonselectedOptions = '';
        var buttonId = jQuery(orderbtn).attr('id');        
        var formId = buttonId.replace('AddToCart','AddToCartForm'); 
        var inputSelector = 'input[form="' + formId + '"]';        
		jQuery(inputSelector).each(function(index) {
			if (jQuery(this).is(':checked')) {
				selectedVal = jQuery(this).val();				
				selectFlag = selectedVal.toLowerCase().indexOf('select');
				firstword = selectedVal.split(':')[0];
				if (selectFlag > -1) {
			      nonselectedOptions += '\n' + firstword;
				};
			};
		});
		
		if (nonselectedOptions == '') {			
            return true;
		} else {
            alert('Please choose the following first: ' + nonselectedOptions.replace(/Select/gi,''));
			return false;
		};	
}

/* open review form when url contains 'shopify-product-reviews' */
$(document).ready(function() {
 if (window.location.href.indexOf('shopify-product-reviews') > -1) {
   $('<style>.spr-form {display: block;}</style>').appendTo('head');
 }
});
