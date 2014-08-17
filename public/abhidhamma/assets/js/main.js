var pagesLookup = (function () {
    var keys = [], pagesLookup = {}, pages = window.pagesObj, k, i, prev, next, cur, len;

    console.log(pages);

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

    console.log(JSON.stringify(pagesLookup, undefined, 2));
    return pagesLookup;
}());

function getCurPageLookup() {
    var parsedUrl = $.mobile.path.parseUrl(document.URL);
    return pagesLookup[parsedUrl.filename];
}

function inPagesLookup() {
    var parsedUrl = $.mobile.path.parseUrl(document.URL);
    return parsedUrl.filename in pagesLookup;
}

// Pagecreate will fire for each of the pages but we only need to bind once so we use "one()"
$(document).one("pagecreate", ".abd-page", function () {

    if (!inPagesLookup())
        return;

    function navNextPage() {
        var curPageLookup = getCurPageLookup();
        var next = curPageLookup && curPageLookup.next;
        if (next) {
            $(":mobile-pagecontainer").pagecontainer("change", next, {
                transition: "slide"
            });
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
        }
    }

    // Navigate to the next page on swipeleft
    $(document).on("swipeleft", ".abd-page", function (event) {
          navNextPage();
    });
    // Navigate to the next page when the "next" button is clicked
    $(document).on("click", ".next", function () {
        navNextPage();
    });

    // The same for the navigating to the previous page
    $(document).on("swiperight", ".abd-page", function (event) {
          // if (prev && (event.target === $(this)[0])) {
          navPrevPage();
    });
    $(document).on("click", ".prev", function () {
          navPrevPage();
    });
});

$(document).on("pageshow", ".abd-page", function () {
    var parsedUrl = $.mobile.path.parseUrl(document.URL),
        curPageLookup = pagesLookup[parsedUrl.filename],
        inPagesLookup = parsedUrl.filename in pagesLookup,
        next = curPageLookup.next,
        prev = curPageLookup.prev;

    console.log({next: next, prev: prev});

    document.title = $(".abd-page h1:visible").text() + ' - kusalakari.org';
    // Prefetch the next page
    // We added data-dom-cache="true" to the page so it won't be deleted
    // so there is no need to prefetch it
    if (inPagesLookup && next) {
        $(":mobile-pagecontainer").pagecontainer("load", next);
    }

    if (inPagesLookup) {
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
