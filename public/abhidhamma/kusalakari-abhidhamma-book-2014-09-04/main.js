debug = false;
function w2u(text) {
    return convertText(text, 'wininnwa', 'unicode');
}

$(document).ready(function () {

    function onLinkClick() {
        var pageTitle = frames[1].document.title;
        var pageNum = pageTitle.replace('Page ', '');
        var pageTitleDiv = '<div>' + pageTitle +'</div>'
        frames[1].document.body.innerHTML = pageTitleDiv + frames[1].document.body.innerHTML;

        // history.pushState({page: pageNum}, pageTitle, "?page=" + pageNum)
    }

    $('#links').on('load', function () {
        var list = frames[0].document.getElementsByTagName('a');
        for (var i = 0; i < list.length; i++) {
            list.item(i).onclick = function() {
                setTimeout(onLinkClick, 200);
            }
        }
    })

    // todo: simulate page link click
    setTimeout(function() {
        var pageTitle = frames[1].document.title;
        var pageNum = pageTitle.replace('Page ', '');
        var pageTitleDiv = '<div>' + pageTitle +'</div>'
        frames[1].document.body.innerHTML = pageTitleDiv + frames[1].document.body.innerHTML;
        //console.log(frames[1].document.title)
    }, 200)
});