angular.module( 'embedly', [] )

.factory( 'embedly', function($q, $http) {
    var apiKey = '50152bdc848943a3820c8d97d4769f19';
    var baseUrl = 'http://api.embed.ly/1/oembed?';

    function makeRequest(args) {
        var url = args.url;
        var maxWidth = args.maxWidth;
        var maxHeight = args.maxHeight;
        var deferred = $q.defer();
        var params = {};
        params.key = apiKey;
        params.format = 'json';
        // have to make the url param separate because the "params" property
        // of the $http method doesn't seem to encode properly
        apiUrl = baseUrl + 'url=' + encodeURIComponent(url);
        if (maxHeight) { params.maxheight = maxHeight; }
        if (maxWidth) { params.maxwidth = maxWidth; }
        $http({
            url: apiUrl,
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
