({
    block : 'page',
    title : 'bem factory',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '_index.css' }
    ],
    scripts : [{ elem : 'js', url : '_index.js' }],
    content : [
        'bem factory',
        {
            block : 'button',
            mods : { method : 'put' },
            text : 'icpn',
            icon : 'icon'
        },
        {
            block : 'button',
            mods : { method : 'delete', theme : 'islands', size : 'l' },
            text : 'icpn',
            icon : { block : 'icon' }
        }
    ]
})
