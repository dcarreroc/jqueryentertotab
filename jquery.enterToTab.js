(function($) {
    jQuery.fn.enterToTab = function() {
        return this.each(function() {
            $(this).bind('keypress', function(event) {
                if (event.keyCode == '13') {
                    event.preventDefault();
                    var list = $(":focusable");
                    list.eq(list.index(this)+1).focus().select();
                }
            });
        });
    }

    $.extend($.expr[':'], {
        focusable: function(element) {
            var nodeName = element.nodeName.toLowerCase(),
                tabIndex = $.attr(element, 'tabindex');
                return (/input|select|textarea|button|object/.test(nodeName)
                     ? !element.disabled
                    : 'a' == nodeName || 'area' == nodeName
                    ? element.href || !isNaN(tabIndex)
                    : !isNaN(tabIndex))
                    // the element and all of its ancestors must be visible
                    // the browser may report that the area is hidden
                    && !$(element)['area' == nodeName ? 'parents' : 'closest'](':hidden').length;
        }
    });
})(jQuery);
