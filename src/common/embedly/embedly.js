angular.module( 'embedly', [] )

.factory( 'embedly', function($q, $http) {
    var apiKey = '50152bdc848943a3820c8d97d4769f19';
    var baseUrl = 'http://api.embed.ly/1/oembed?';

    function makeRequest(args) {
        var urls = args.urls || [args.url];
        var maxWidth = args.maxWidth;
        var maxHeight = args.maxHeight;
        var deferred = $q.defer();
        var params = {};
        params.key = apiKey;
        params.format = 'json';
        if (urls.length > 1) {
            param.urls = urls;
        }
        else {
            params.url = urls[0];
        }
        if (maxHeight) { params.maxheight = maxHeight; }
        if (maxWidth) { params.maxwidth = maxWidth; }
        $http({
            url: baseUrl,
            params: params,
            method: 'GET'
        }).then(success, error);

        function success (response) {
            deferred.resolve(response);
        }
        function error () {
            deferred.resolve(arguments);
        }


        return deferred.promise;
    }

    return makeRequest;
});
