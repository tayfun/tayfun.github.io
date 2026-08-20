/*
 * Author:  Tayfun Sen
 * URL:     http://blog.tayfunsen.com
 *
 */
// Pass jQuery object so that the dollar doesn't collide with other libraries.
// See: http://docs.jquery.com/Plugins/Authoring#Getting_Started
(function($) {
    // Because IE < 9 does not support Date.now()
    var today = new Date();
    var now = today.getTime();

    $(document).ready(stylePage);

    function stylePage() {
        prettyDates();
    }

    function prettyDates() {
        var postDateArr = $("time.postdate");
        $.each(postDateArr, function(index, el) {
            el = $(el);
            var postDate = new Date(el.attr('datetime'));
            var elapsedDays = Math.floor((now - postDate) / 86400000);
            var elapsedDaysStr = beforePosted(elapsedDays);
            el.text(elapsedDaysStr);
        });
    }

    function beforePosted(days) {
        if (days === 0) {
            return "today";
        } else if (days == 1) {
            return "yesterday";
        } else if (days < 30) {
            return days + " days ago";
        } else if (days < 365) {
            var months = Math.floor(days / 30);
            return (months > 1? months + " months" : "a month") + " ago";
        } else {
            var years = Math.floor(days / 365);
            return (years > 1? years + " years" : "a year") + " ago";
        }
    }
})(jQuery);
