
(function ($) {
    $.fn.menuScroll = function (params) {
        params = $.extend ({
            minHeight : 70,
            cssClass : 'fixed'
        }, params);

        var item = $(this);

        $(window).on ('scroll', function () {
            var tm = null;
            if (parseInt ($(this).scrollTop ()) > parseInt (params.minHeight)) {
                if (!item.hasClass (params.cssClass)) {
                    item.addClass (params.cssClass);
                    tm = setTimeout (function () {
                        item.addClass (params.cssClass + '-animated');
                        tm = null;
                    }, 10);
                }
            } else {
                if (tm !== null) clearTimeout (tm);
                item.removeClass (params.cssClass)
                    .removeClass (params.cssClass + '-animated');
            }
        });

        return this;
    } // menuScroll ();
})(jQuery);
