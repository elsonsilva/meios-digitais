'use strict';

app.aboutSobre = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var aboutSobreModel = kendo.observable({
        openLink: function(url) {
            window.open(url, '_system');
            if (window.event) {
                window.event.preventDefault && window.event.preventDefault();
                window.event.returnValue = false;
            }
        }
    });

    parent.set('aboutSobreModel', aboutSobreModel);
})(app.aboutSobre);