(function() {
    "use strict";

    /* global kintone */
    /* global marked */

    kintone.events.on('app.record.detail.show', function(event){
        for (var key in event.record) {
            if (key.indexOf('markdown') !== -1) {
                // markdownに
                var el = kintone.app.record.getFieldElement(key);
                var val = event.record[key]['value'];
                
                // marked
                el.innerHTML = marked(val);
                el.classList.add('markdown');
            }
        }
    });
})();
