!function(e){"use strict";var o={2:function(e){return e?"dva":"dve"},3:function(){return"tri"},4:function(){return"štyri"}};e.extend(e.fn.select2.defaults,{formatNoMatches:function(){return"Nenašli sa žiadne položky"},formatInputTooShort:function(e,n){var t=n-e.length;return 1==t?"Prosím zadajte ešte jeden znak":t<=4?"Prosím zadajte ešte ďalšie "+o[t](!0)+" znaky":"Prosím zadajte ešte ďalších "+t+" znakov"},formatInputTooLong:function(e,n){var t=e.length-n;return 1==t?"Prosím zadajte o jeden znak menej":t<=4?"Prosím zadajte o "+o[t](!0)+" znaky menej":"Prosím zadajte o "+t+" znakov menej"},formatSelectionTooBig:function(e){return 1==e?"Môžete zvoliť len jednu položku":e<=4?"Môžete zvoliť najviac "+o[e](!1)+" položky":"Môžete zvoliť najviac "+e+" položiek"},formatLoadMore:function(e){return"Načítavajú sa ďalšie výsledky…"},formatSearching:function(){return"Vyhľadávanie…"}})}(jQuery);