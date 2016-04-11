modules.define(
    'jquery__ui',
    ['loader_type_js', 'jquery'],
    function(provide, loader, $) {
        if(typeof $.ui !== 'undefined') {
            provide($.ui);

            return;
        }

        window.jQuery = $;

        loader('//yastatic.net/jquery-ui/1.11.1/jquery-ui.min.js', function() {
            $.ui = window.jQuery.ui;

            provide($.ui);

            delete window.jQuery;
        });
});
