!function(t){"use strict";t.extend(t.fn.select2.defaults,{formatNoMatches:function(){return"Δεν βρέθηκαν αποτελέσματα"},formatInputTooShort:function(t,n){var o=n-t.length;return"Παρακαλούμε εισάγετε "+o+" περισσότερο"+(1<o?"υς":"")+" χαρακτήρ"+(1<o?"ες":"α")},formatInputTooLong:function(t,n){var o=t.length-n;return"Παρακαλούμε διαγράψτε "+o+" χαρακτήρ"+(1<o?"ες":"α")},formatSelectionTooBig:function(t){return"Μπορείτε να επιλέξετε μόνο "+t+" αντικείμεν"+(1<t?"α":"ο")},formatLoadMore:function(t){return"Φόρτωση περισσότερων…"},formatSearching:function(){return"Αναζήτηση…"}})}(jQuery);