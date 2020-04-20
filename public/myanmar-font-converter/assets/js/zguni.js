// From Tagu chrom extension

var regexMM = new RegExp("[\u1000-\u109f\uaa60-\uaa7f]+");
var regexUni = new RegExp("[ဃငဆဇဈဉညဋဌဍဎဏဒဓနဘရဝဟဠအ]်|ျ[က-အ]ါ|ျ[ါ-း]|\u103e|\u103f|\u1031[^\u1000-\u1021\u103b\u1040\u106a\u106b\u107e-\u1084\u108f\u1090]|\u1031$|\u1031[က-အ]\u1032|\u1025\u102f|\u103c\u103d[\u1000-\u1001]|ည်း|ျင်း|င်|န်း|ျာ|င့်");
var regexZG = new RegExp("\s\u1031| ေ[က-အ]်|[က-အ]း");
var mmFonts = new RegExp("Zawgyi-One|Masterpiece Uni Sans|Myanmar3|Yunghkio|Parabaik|WinUni Innwa|Win Uni Innwa|Padauk|MyMyanmar|Panglong|TharLon");
var unicodeFonts = new RegExp("MON3 Anonta 1 | Masterpiece Uni Sans|Myanmar3|Yunghkio|Parabaik|WinUni Innwa|Win Uni Innwa|Padauk|MyMyanmar|Panglong|TharLon|Myanmar Sangam");
var useUnicodeFont = "MON3 Anonta 1";
var SupportedTag = ["DIV", "B", "SPAN", "INPUT", "SELECT", "TEXTAREA", "TABLE", "TR", "TD", "HEADER", "P", "FONT", "H1", "H2", "H3", "H4", "H5", "H6"];
var tagPage = function()
{
    var el = document.getElementsByTagName('*');
    for (var i = 0; i < el.length; i++)
    {
        var thisNode = el[i];
        addCSS(thisNode);

    }

}

function addCSS(thisNode)
{
    //console = unsafeWindow.console;

    if (SupportedTag.indexOf(thisNode.nodeName) == -1) {
        return;
    }
    var text = thisNode.textContent;
    text = text.replace(/\n/g, "");
    if (thisNode.nodeName == "INPUT" || thisNode.nodeName == "SELECT")
    {
        if (thisNode.value == "") {
            thisNode.style.fontFamily = "Zawgyi-One";
        }
        else
        {
            if (!regexMM.test(text))
            {
                return;
            }
            else if (regexUni.test(text))
            {

                thisNode.style.fontFamily = "'MON3 Anonta 1'";
            }
            else {
                thisNode.style.fontFamily = 'Zawgyi-One';
            }
        }

    }
    else {

        if (!regexMM.test(text)) {

            return;
        }
        if (text) {

            if (regexUni.test(text)) {

                thisNode.style.fontFamily = "'MON3 Anonta 1'";
            }
            else {

                thisNode.style.fontFamily = "Zawgyi-One";

            }
        }

    }
}

tagPage();


var myObserver = new window.MutationObserver(function(mutations) {

    for (var i = 0; i < mutations.length; ++i) {
        // look through all added nodes of this mutation
        for (var j = 0; j < mutations[i].addedNodes.length; ++j) {
            // was a child added with ID of 'bar'?

            addCSS(mutations[i].addedNodes[j]);
        }
    }

});

var targetNodes = document.querySelector('html');
var obsConfig = {childList: true,characterData: false,attributes: false,subtree: true};
myObserver.observe(targetNodes, obsConfig);

//create font face CSS Unicode
var styleNode = document.createElement("style");
styleNode.type = "text/css";
styleNode.textContent = "@font-face { font-family: 'MON3 Anonta 1'; src: local('MON3 Anonta 1'),url('"
    + chrome.extension.getURL("fonts/mon3.ttf")
    + "'); }"
;
document.head.appendChild(styleNode);

//create font face CSS Zawgyi
var styleNode = document.createElement("style");
styleNode.type = "text/css";
styleNode.textContent = "@font-face { font-family: 'Zawgyi-One'; src: local('Zawgyi-One'),url('"
    + chrome.extension.getURL("fonts/zawgyi.ttf")
    + "'); }"
;
document.head.appendChild(styleNode);
