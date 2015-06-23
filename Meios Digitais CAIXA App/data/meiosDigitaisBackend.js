'use strict';

(function() {
    app.data.meiosDigitaisBackend = new Everlive({
        offlineStorage: true,
        apiKey: 'd5dEKD2lDdvjPTCw',
        url: '//platform.telerik.com/bs-api/v1/',
        scheme: 'https'
    });

    document.addEventListener("online", function() {
        app.data.meiosDigitaisBackend.offline(false);
        app.data.meiosDigitaisBackend.sync();
    });

    document.addEventListener("offline", function() {
        app.data.meiosDigitaisBackend.offline(true);
    });

}());