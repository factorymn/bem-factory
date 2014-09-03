modules.define(
    'jquery-ui',
    ['loader_type_js', 'jquery'],
    function(provide, loader, $) {

        function doProvide(preserveGlobal) {
            provide(preserveGlobal? $.ui : $.ui);
        }

        typeof $.ui !== 'undefined'?
            doProvide(true) :
            loader('//yastatic.net/jquery-ui/1.11.1/jquery-ui.min.js', doProvide);
});
