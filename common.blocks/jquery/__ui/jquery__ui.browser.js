modules.define(
    'jquery__ui',
    ['loader_type_js', 'jquery'],
    function(provide, loader, $) {
        typeof $.ui !== 'undefined'?
            provide($.ui) :
            loader(
                '//yastatic.net/jquery-ui/1.11.1/jquery-ui.min.js',
                function() { provide($.ui); });
});
