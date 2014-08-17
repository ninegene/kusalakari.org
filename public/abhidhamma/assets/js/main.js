var pagesLookup = (function () {
    var keys = [], pagesLookup = {}, pages = window.pagesObj, k, i, prev, next, cur, len;

    //console.log(pages);

    for (k in pages) {
        if (pages.hasOwnProperty(k)) {
            if (typeof pages[k] == 'object' && pages[k].link) {
                keys.push(k);
            }
        }
    }

    keys.sort();
    len = keys.length;

    for (i = 0; i < len; i++) {
        prev = keys[i - 1];
        next = keys[i + 1];
        cur = keys[i];
        pagesLookup[pages[cur].link] = {
            prev: prev && pages[prev].link,
            next: next && pages[next].link
        };
    }

    //console.log(JSON.stringify(pagesLookup, undefined, 2));
    return pagesLookup;
}());

function getCurPageLookup(url) {
    var parsedUrl = $.mobile.path.parseUrl(document.URL);
    return pagesLookup[parsedUrl.filename];
}

function inPagesLookup(url) {
    var parsedUrl = $.mobile.path.parseUrl(document.URL);
    return parsedUrl.filename in pagesLookup;
}

// Pagecreate will fire for each of the pages but we only need to bind once so we use "one()"
$(document).one("pagecreate", ".abd-page", function () {

    console.log(new Date() + ': page created once');

    function navNextPage() {
        var curPageLookup = getCurPageLookup();
        var next = curPageLookup && curPageLookup.next;
        if (next) {
            $(":mobile-pagecontainer").pagecontainer("change", next, {
                transition: "slide"
            });
            //$(":mobile-pagecontainer").pagecontainer("change", next);
        }
    }

    function navPrevPage() {
        var curPageLookup = getCurPageLookup();
        var prev = curPageLookup && curPageLookup.prev;
        if (prev) {
            $(":mobile-pagecontainer").pagecontainer("change", prev, {
                transition: "slide",
                reverse: true
            });
            //$(":mobile-pagecontainer").pagecontainer("change", prev);
        }
    }

    // Navigate to the next page on swipeleft
    $(document).on("swipeleft", ".abd-page", function (event) {
          navNextPage();
    });
    $(document).on("swiperight", ".abd-page", function (event) {
        navPrevPage();
    });

    // Navigate to the next page when the "next" button is clicked
    $(document).on("click", ".next", function () {
        navNextPage();
    });
    $(document).on("click", ".prev", function () {
          navPrevPage();
    });
});

$(document).on("pageshow", ".abd-page", function () {
    var curPageLookup = getCurPageLookup();
    var hasNextPrev = inPagesLookup();
    var next = curPageLookup && curPageLookup.next;
    var prev = curPageLookup && curPageLookup.prev;

    console.log({next: next, prev: prev});

    document.title = $(".abd-page h1:visible").text() + ' - kusalakari.org';
    // Prefetch the next page
    // We added data-dom-cache="true" to the page so it won't be deleted
    // so there is no need to prefetch it
    if (hasNextPrev && next) {
        // comment out loading next page
        // because this causes issue when opening left toc side panel and right search panel
        //$(":mobile-pagecontainer").pagecontainer("load", next);
    }

    if (hasNextPrev) {
        $('.next-prev').show();
    }

    // We disable the next or previous buttons in the footer
    // if there is no next or previous page
    // We use the same footer on each page
    // so first we remove the disabled class if it is there
    $(".next.ui-state-disabled, .prev.ui-state-disabled").removeClass("ui-state-disabled");

    if (!next) {
        $(".next").addClass("ui-state-disabled");
    }
    if (!prev) {
        $(".prev").addClass("ui-state-disabled");
    }
});

// Try to remove tracking scripts added by Yahoo host
// Because in some cases, it slows down page loading
$(document).on('DOMNodeInserted', function(e) {
    if (e.target.nodeName.toLowerCase() == 'script') {
        var $ele = $(e.target);
        console.log('going to remove on DOMNodeInserted ' + ($ele.attr('src') || $ele.html()));
        $ele.remove();
    }
});
$(document).ready(function () {
    setTimeout(function () {
        $('script').each(function () {
            var src = $(this).attr('src');
            var html = $(this).html();
            if (/(lexity\.com|yimg\.com)/.test(src) || /(geovisit|YWAGTracker)/.test(html)) {
                console.log('going to remove ' + (src || html));
                $(this).remove();
            }
        });
    }, 100);
});

window.ycsdone = 1; // disable geovisit() tracking

/*
var ycsdone;
function geovisit()
{
    var z;
    if (ycsdone)
        return;
    z="&r="+escape(document.referrer);
    z=z+"&b="+escape(navigator.appName+" "+navigator.appVersion);
    w=parseFloat(navigator.appVersion);
    if (w > 2.0) {
        z=z+"&s="+screen.width+"x"+screen.height;
        z=z+"&o="+navigator.platform;
        v="1.2";
        if (navigator.appName != "Netscape") {
            z=z+"&c="+screen.colorDepth;
        } else {
            z=z+"&c="+screen.pixelDepth
        }
        z=z+"&j="+navigator.javaEnabled();
    } else {
        v=1.0;
    }
    z=z+"&v="+v;
    document.writeln("<img border=\"0\" style=\"display:none\" src=\"http://visit.webhosting.yahoo.com/visit.gif?"+z+"\">");
    ycsdone=1;
}
*/
