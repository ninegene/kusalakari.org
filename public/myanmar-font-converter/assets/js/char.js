function toCharCode(str) {
    var dst = "";
    for (var i = 0; str && i < str.length; i++) {
        dst += str.charCodeAt(i);
        if (i < str.length - 1)
            dst += ",";
    }
    return dst;
}

function charCodesStr(charCodes) {
    var charStrings = [];
    for (var i = 0; i < charCodes.length; i++) {
        charStrings[i] = String(charCodes[i]);
    }
    return charStrings;
}

function charCodesToStr(charCodes) {
    var charStrings = [];
    for (var i = 0; i < charCodes.length; i++) {
        charStrings[i] = String.fromCharCode(charCodes[i]);
    }
    return charStrings;
}

function extToStr(ext, charCodes) {

    var extStr = {};
    for (var k in ext) {
        var ary = ext[k];
        var kStr = String.fromCharCode(k);
        var aryStr = [];
        for (var i = 0; i < ary.length; i++) {
            var c = charCodes[ary[i]];
            aryStr[i] = c;
        }
        extStr[kStr] = aryStr;
    }
    return extStr;
}

//var asciiExt = extToStr(w.ext, a.uniChars);
//console.log(JSON.stringify(w.ext));
//console.log(JSON.stringify(asciiExt));
//
//var uniExt = extToStr(m.ext, a.asciiChars);
//console.log(JSON.stringify(m.ext));
//console.log(JSON.stringify(uniExt));

function charCodesMap_(charCodes) {
    var map = {};
    for (var i = 0; i < charCodes.length; i++) {
        var charCode = charCodes[i];
        if (typeof map[charCode] == 'undefined')
            map[charCode] = i;
    }
    return map;
}
