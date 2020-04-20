debug = false;

$(document).ready(function () {
    console.log("ready!");
    $('#links').on('load', function () {
        function onLinkClick() {
            console.log(arguments);
            var pList = frames[1].document.getElementsByTagName('p') 
            console.log(pList);
            for (var i = 0; i < pList.length; i++) {
                var text = pList.item(i).innerHTML.replace('<br>', '').replace('&nbsp', '')
                var unicodeText = convertText(text, 'wininnwa', 'unicode');
                // console.log('from', text, 'to', unicodeText)
                // console.log(unicodeText);
            }
        }
        console.log("links ready!");
        var list = frames[0].document.getElementsByTagName('a');
        console.log(list);
        for (var i = 0; i < list.length; i++) {
            list.item(i).onclick = onLinkClick;
        }
    })
});