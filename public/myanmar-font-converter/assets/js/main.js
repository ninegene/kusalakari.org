var FONTS = {
    'charcode': {'font-family': 'monospace', 'font-size': '12pt', 'line-height': '1.2em'},
    'codepoint': {'font-family': 'monospace', 'font-size': '12pt', 'line-height': '1.2em'},
    'wininnwa': {'font-family': 'Win Innwa', 'font-size': '16pt', 'line-height': '1.2em'},
    'unicode': {'font-family': 'Myanmar3', 'font-size': '12pt', 'line-height': '1.5em'},
    'zawgyi': {'font-family': 'ZawGyi-One', 'font-size': '11pt', 'line-height': '1.8em'}
};

var $src = $('#src');
var $dst = $('#dst');

var $btnConvert = $('#btn-convert');
var $btnSwitch = $('#btn-switch');

function setSrcFontProps() {
    var $srcText = $src.find('textarea');
    var $srcFont = $src.find('select');
    var css = FONTS[$srcFont.val()];
    $srcText.css(css);
}

function setDstFontProps() {
    var $dstText = $dst.find('textarea');
    var $dstFont = $dst.find('select');
    var css = FONTS[$dstFont.val()];
    $dstText.css(css);
}

function switchSrcAndDst() {
    var $srcLabel = $src.find('label');
    var $srcFont = $src.find('select');
    var $srcText = $src.find('textarea');

    var $dstLabel = $dst.find('label');
    var $dstFont = $dst.find('select');
    var $dstText = $dst.find('textarea');

}

function adjustTextAreaHeight($textArea, min, max) {
    min = min || 10;
    max = max || 25;
    var rows = $textArea.val().split("\n");
    var count = min;
    if (rows[0] != "undefined" && rows.length > min && rows.length < max)
        count = rows.length;
    else if (rows.length >= max)
        count = max;
    $textArea.attr('rows', count);
}

function convertAndSetText() {
    var $srcText = $src.find('textarea');
    var $srcFont = $src.find('select');

    var $dstText = $dst.find('textarea');
    var $dstFont = $dst.find('select');

    var text = convertText($srcText.val(), $srcFont.val(), $dstFont.val());
    $dstText.val(text);
    adjustTextAreaHeight($dstText);
}

$src.on('change', 'select',  function () {
    setSrcFontProps();
    convertAndSetText();
});

$dst.on('change', 'select', function () {
    setDstFontProps();
    convertAndSetText();
});

$btnConvert.on('click', function () {
    convertAndSetText();
});

$btnSwitch.on('click', function () {
    switchSrcAndDst();
});

(function initialize() {
    setSrcFontProps();
    setDstFontProps();
    convertAndSetText();
})();
