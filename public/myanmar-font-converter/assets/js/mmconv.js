var toChar = String.fromCodePoint || String.fromCharCode;

var F =
{
    "zawgyi": {
        "codes": [
            4096, 4097, 4098, 4099, 4100,
            4101, 4102, 4103, 4104, 4106,
            4107, 4108, 4109, 4110, 4111,
            4112, 4113, 4114, 4115, 4116,
            4117, 4118, 4119, 4120, 4121,
            4122, 4123, 4124, 4125, 4126,
            4127, 4128, 4129,
            4192, 4193, 4194, 4195, 0, 4197, 4199, 4200, 4201, 0,
            4204, 4205, 0, 0, 4208, 4210, 4212, 4213, 4214, 4215,
            4216, 4217, 4218, 4219, 4220, 0, 0, 4229, 0, 0,
            0, 0, 0,
            4160, 4161, 4162, 4163, 4164, 4165, 4166, 4167, 4168, 4169,

            0, 4145, 0, 4141, 4142, 0, 4153, 4196, 4140, 4139,
            4186, 0, 4146, 0, 4156, 4234, 0, 4150, 4152, 0,

            4154, 4221, 0, 4155, 4222, 4223, 4224, 4225, 4226, 4227,
            4228, 0, 4151, 4244, 4245, 0, 4170, 4171, 0, 4239,

            4240, 4242, 4133, 4135, 4175, 0, 4230, 4173, 4172, 4132,
            0, 4143, 4144, 4147, 4148, 4232, 4233, 4157, 4231, 0,

            4235, 4236, 4238, 4237, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 4137, 4138, 0, 4105, 4203,

            4202, 4134, 0, 4174, 4131, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 4247, 4206, 4207, 0, 4241,

            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,

            0, 0, 0, 0, 0, 0, 4246, 0, 0, 0,
            4209, 4211, 0,

            43, 45, 120, 47, 37, 40, 41, 91, 93, 63, 33, 44, 46, 39, 39, 61, 0,
            4105, 42
        ],
        "code_to_indexes": {
            "4104": [5, 96],
            "4192": [81, 0],
            "4193": [81, 1],
            "4194": [81, 2],
            "4195": [81, 3],
            "4197": [81, 5],
            "4199": [81, 6],
            "4200": [81, 7],
            "4201": [81, 8],
            "4204": [81, 10],
            "4205": [81, 11],
            "4208": [81, 14],
            "4210": [81, 15],
            "4212": [81, 16],
            "4213": [81, 17],
            "4214": [81, 18],
            "4215": [81, 19],
            "4216": [81, 20],
            "4217": [81, 21],
            "4218": [81, 22],
            "4219": [81, 23],
            "4220": [81, 24],
            "4229": [81, 27],
            "4196": [4, 82, 81],
            "4186": [85, 82],
            "4234": [133, 90],
            "4221": [96],
            "4222": [99],
            "4223": [99],
            "4224": [99],
            "4225": [99],
            "4226": [99],
            "4227": [99],
            "4228": [99],
            "4244": [108],
            "4245": [108],
            "4239": [19],
            "4240": [26],
            "4242": [10, 81, 11],
            "4147": [127],
            "4148": [128],
            "4232": [133, 127],
            "4233": [133, 128],
            "4231": [133],
            "4235": [4, 82, 81, 79],
            "4236": [4, 82, 81, 80],
            "4238": [79, 93],
            "4237": [4, 82, 81, 93],
            "4137": [100, 29],
            "4138": [77, 100, 29, 84, 82],
            "4203": [9],
            "4202": [118],
            "4134": [118, 80],
            "4174": [158, 4, 82, 94],
            "4247": [10, 81, 43],
            "4206": [12, 81, 45],
            "4207": [13, 81, 46],
            "4241": [14, 81, 12],
            "4209": [81, 15],
            "4211": [81, 16]
        },
        "key": {
            "4<": "ဝ",
            "3i": "၍",
            "3y": "၌",
            "3t": "ဤ",
            "3k": "ႉ",
            "7L": "ႋ",
            "7D": "ႌ",
            "3d": "ႎ",
            "3l": "ႍ",
            "4R": "ြၽ",
            "4Q": "ွ်",
            "4W": "ႊၽ",
            "35": "ဩ",
            "75": "ဪ",
            "39": "ဦ",
            "34": "၎",
            "74": "ဣ"
        },
        "order": {
            "consonant": {
                "fwd": {},
                "rev": {}
            },
            "before": {},
            "vowel": [
                "\u1064",
                "\u102D", "\u102E",
                "\u1036",
                "\u108B", "\u108C", "\u108D", "\u108E",
                "\u1032",
                "\u103D", "\u103C",
                "\u108A",
                "\u1087",
                "\u102F",
                "\u1033",
                "\u1030",
                "\u1034",
                "\u1088", "\u1089",
                "\u103A",
                "\u107D",
                "\u102C", "\u102B",
                "\u1039",
                "\u105A",
                "\u1037",
                "\u1094", "\u1095",
                "\u1038"
            ],
            "after": {}
        },
        "ac2": {},
        "ac3": {
            "(ႏ)": "န",
            "([၀])": "ဝ",
            "(႐)": "ရ",
            "(န္ုပ္)": "န္နုပ္",
            "([ဉၫ])": "ည",
            "([ၱ])": "ၲ",
            "([ဳ])": "ု",
            "([ဴ])": "ူ",
            "([ါ])": "ာ",
            "([ႇ])": "ွ",
            "([ၽ])": "်",
            "([ႊ])": "ွြ",
            "([႔,႕])": "့",
            "([ႈ])": "ွု",
            "([ႉ])": "ွူ",
            "([ၾ,ႀ,ႂ,ႄ,ၿ,ႁ,ႃ])": "ျ",
            "([ႎ])": "ိံ",
            "([ႍ])": "ၤံ",
            "([ႋ])": "ိံ",
            "([ႌ])": "ီံ",
            "([ၚ])": "ာ္",
            "(ိွ)": "ွိ"
        }
    },

    "unicode": {
        "codes": [
            4096, 4097, 4098, 4099, 4100,
            4101, 4102, 4103, 4104, 4106,
            4107, 4108, 4109, 4110, 4111,
            4112, 4113, 4114, 4115, 4116,
            4117, 4118, 4119, 4120, 4121,
            4122, 4123, 4124, 4125, 4126,
            4127, 4128, 4129,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0,
            4160, 4161, 4162, 4163, 4164, 4165, 4166, 4167, 4168, 4169,

            0, 4145, 0, 4141, 4142, 4153, 4154, 0, 4140, 4139,
            0, 0, 4146, 0, 4157, 0, 0, 4150, 4152, 0,

            4155, 0, 0, 4156, 0, 0, 0, 0, 0, 0,
            0, 0, 4151, 0, 0, 0, 4170, 4171, 0, 0,

            0, 0, 4133, 4135, 4175, 0, 4159, 4173, 4172, 4132,
            0, 4143, 4144, 0, 0, 0, 0, 4158, 0, 0,

            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 4105, 0,

            0, 4134, 4174, 0, 4131, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,

            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,

            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0,

            43, 45, 120, 47, 37, 40, 41, 91, 93, 63, 33, 44, 46, 39, 39, 61, 0,
            4105, 42
        ],
        "chars": [
            "က", "ခ", "ဂ", "ဃ", "င",
            "စ", "ဆ", "ဇ", "ဈ", "ည",
            "ဋ", "ဌ", "ဍ", "ဎ", "ဏ",
            "တ", "ထ", "ဒ", "ဓ", "န",
            "ပ", "ဖ", "ဗ", "ဘ", "မ",
            "ယ", "ရ", "လ", "ဝ", "သ",
            "ဟ", "ဠ", "အ",
            "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000",
            "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000",
            "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000",
            "\u0000", "\u0000", "\u0000",
            "၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉",

            "\u0000", "ေ", "\u0000", "ိ", "ီ", "္", "်", "\u0000", "ာ", "ါ",
            "\u0000", "\u0000", "ဲ", "\u0000", "ွ", "\u0000", "\u0000", "ံ", "း", "\u0000",

            "ျ", "\u0000", "\u0000", "ြ", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000",
            "\u0000", "\u0000", "့", "\u0000", "\u0000", "\u0000", "၊", "။", "\u0000", "\u0000",

            "\u0000", "\u0000", "ဥ", "ဧ", "၏", "\u0000", "ဿ", "၍", "၌", "ဤ",
            "\u0000", "ု", "ူ", "\u0000", "\u0000", "\u0000", "\u0000", "ှ", "\u0000", "\u0000",

            "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000",
            "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "ဉ", "\u0000",

            "\u0000", "ဦ", "၎", "\u0000", "ဣ", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000",
            "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000",

            "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000",
            "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000",

            "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000",
            "\u0000", "\u0000", "\u0000",

            "+", "-", "x", "/", "%", "(", ")", "[", "]", "?", "!", ",", ".", "'", "'", "=", "\u0000",
            "ဉ", "*"
        ],
        "code_to_indexes": {
            "4104": [5, 96],
            "4134": [118, 80]
        },
        "char_to_wininnwa_chars": {
            "ဈ": ["p", "s"],
            "ဦ": ["O", "D"]
        },
        "key": {
            "4F": "္"
        },
        "order": {
            "consonant": {
                "fwd": {
                    "(\u103C)([က-အ])": "$2$1",
                    "(\u1031)([က-အ])": "$2$1",
                    "([က-အ][\u102C-\u103F]*)(\u1004\u103A\u1039)": "$2$1",
                    "\u1025([\u1039\u103A])": "\u1009$1"
                },
                "rev": {
                    "([က-အ])(\u103C)": "$2$1",
                    "(\u103C?[က-အ][\u102C-\u103F]*)(\u1031)": "$2$1",
                    "(\u1004\u103A\u1039)([\u1031\u103C]*[က-အ])": "$2$1"
                }
            },
            "before": {},
            "vowel": [
                "\u103B", "\u103C", "\u103D", "\u103E", "\u1031",
                "\u102B", "\u102C", "\u102D", "\u102E", "\u102F",
                "\u1030", "\u1032", "\u1036", "\u103A", "\u1039",
                "\u1037"
            ],
            "after": {
                "([\u102B-\u1032\u103B-\u103E]*)(\u1039[က-အ])": "$2$1",
                "\u102F\u103A": "\u103A\u102F",
                "(\u103C\u103D)(\u1031)([က-အ])": "$3$1$2",
                "(\u103C\u103D)([က-အ])": "$2$1"
            }
        },
        "ac2": {}
    },

    "wininnwa": {
        "codes": [
            117, 99, 42, 67, 105,
            112, 113, 90, 0, 110,
            35, 88, 33, 161, 80,
            119, 120, 39, 34, 101,
            121, 122, 65, 98, 114,
            44, 38, 118, 48, 111,
            91, 86, 116,
            250, 169, 190, 162, 0, 246, 228, 198, 209, 0,
            179, 178, 0, 0, 214, 197, 172, 180, 168, 233,
            220, 230, 193, 199, 174, 0, 0, 8217, 0, 0,
            0, 0, 0,
            48, 49, 50, 51, 52, 53, 54, 55, 56, 57,

            0, 97, 0, 100, 68, 4444, 102, 70, 109, 103,
            58, 0, 74, 0, 71, 84, 0, 72, 59, 0,

            115, 223, 0, 106, 77, 78, 66, 96, 126, 0,
            0, 0, 104, 89, 85, 0, 63, 47, 0, 69,

            189, 124, 79, 123, 92, 0, 243, 237, 252, 254,
            0, 107, 108, 75, 76, 73, 170, 83, 167, 0,

            216, 208, 240, 248, 0, 0, 82, 81, 87, 0,
            234, 251, 60, 62, 0, 0, 0, 0, 218, 241,

            205, 0, 164, 0, 163, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 165, 215, 185, 0, 64,

            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,

            0, 0, 0, 0, 0, 0, 201, 0, 0, 0,
            229, 166, 0,

            43, 45, 95, 94, 37, 40, 41, 171, 187, 191, 181, 231, 46, 93, 125, 61, 402,
            0, 227
        ],
        "chars": [
            "u", "c", "*", "C", "i",
            "p", "q", "Z", " ", "n",
            "#", "X", "!", "¡", "P",
            "w", "x", "'", "\"", "e",
            "y", "z", "A", "b", "r",
            ",", "&", "v", "0", "o",
            "[", "V", "t",
            "ú", "©", "¾", "¢", " ", "ö", "ä", "Æ", "Ñ", " ",
            "³", "²", " ", " ", "Ö", "Å", "¬", "´", "¨", "é",
            "Ü", "æ", "Á", "Ç", "®", " ", " ", "’", " ", " ",
            " ", " ", " ",
            "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",

            " ", "a", " ", "d", "D", "ᅜ", "f", "F", "m", "g",
            ":", " ", "J", " ", "G", "T", " ", "H", ";", " ",
            "s", "ß", " ", "j", "M", "N", "B", "`", "~", " ",
            " ", " ", "h", "Y", "U", " ", "?", "/", " ", "E",
            "½", "|", "O", "{", "\\", " ", "ó", "í", "ü", "þ",
            " ", "k", "l", "K", "L", "I", "ª", "S", "§", " ",
            "Ø", "Ð", "ð", "ø", " ", " ", "R", "Q", "W", " ",
            "ê", "û", "<", ">", " ", " ", " ", " ", "Ú", "ñ",
            "Í", " ", "¤", " ", "£", " ", " ", " ", " ", " ",
            " ", " ", " ", " ", " ", "¥", "×", "¹", " ", "@",
            " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
            " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
            " ", " ", " ", " ", " ", " ", "É", " ", " ", " ",
            "å", "¦", " ",

            "+", "-", "_", "^", "%", "(", ")", "«", "»", "¿", "µ", "ç", ".", "]", "}", "=", "ƒ",
            " ", "ã"
        ],
        "code_to_indexes": {
            "250": [81, 0],
            "169": [81, 1],
            "190": [81, 2],
            "162": [81, 3],
            "246": [81, 5],
            "228": [81, 6],
            "198": [81, 7],
            "209": [81, 8],
            "179": [81, 10],
            "178": [81, 11],
            "214": [81, 14],
            "197": [81, 15],
            "172": [81, 16],
            "180": [81, 17],
            "168": [81, 18],
            "233": [81, 19],
            "220": [81, 20],
            "230": [81, 21],
            "193": [81, 22],
            "199": [81, 23],
            "174": [81, 24],
            "8217": [81, 27],
            "70": [4, 82, 81],
            "58": [85, 82],
            "84": [133, 90],
            "223": [96],
            "77": [99],
            "78": [99],
            "66": [99],
            "96": [99],
            "126": [99],
            "89": [108],
            "85": [108],
            "69": [19],
            "189": [26],
            "124": [10, 81, 11],
            "75": [127],
            "76": [128],
            "73": [133, 127],
            "170": [133, 128],
            "167": [133],
            "216": [4, 82, 81, 79],
            "208": [4, 82, 81, 80],
            "240": [79, 93],
            "248": [4, 82, 81, 93],
            "82": [90, 96],
            "81": [133, 96],
            "87": [133, 90, 96],
            "234": [99, 127],
            "251": [99, 127],
            "60": [99, 90],
            "62": [99, 90],
            "241": [9],
            "205": [118],
            "165": [10, 81, 10],
            "215": [12, 81, 45],
            "185": [13, 81, 46],
            "64": [14, 81, 12],
            "229": [81, 15],
            "166": [81, 16],
            "211": [226, 84]
        },
        "char_to_unicode_chars": {
            ":": ["ါ", "်"],
            "<": ["ြ", "ွ"],
            ">": ["ြ", "ွ"],
            "@": ["ဏ", "္", "ဍ"],
            "B": ["ြ"],
            "E": ["န"],
            "F": ["င", "်", "္"],
            "I": ["ှ", "ု"],
            "K": ["ု"],
            "L": ["ူ"],
            "M": ["ြ"],
            "N": ["ြ"],
            "Q": ["ှ", "ျ"],
            "R": ["ွ", "ျ"],
            "T": ["ှ", "ွ"],
            "U": ["့"],
            "W": ["ှ", "ွ", "ျ"],
            "Y": ["့"],
            "`": ["ြ"],
            "|": ["ဋ", "္", "ဌ"],
            "~": ["ြ"],
            "¢": ["္", "ဃ"],
            "¥": ["ဋ", "္", "ဋ"],
            "¦": ["္", "ထ"],
            "§": ["ှ"],
            "¨": ["္", "ဓ"],
            "©": ["္", "ခ"],
            "ª": ["ှ", "ူ"],
            "¬": ["္", "ထ"],
            "®": ["္", "မ"],
            "²": ["္", "ဌ"],
            "³": ["္", "ဋ"],
            "´": ["္", "ဒ"],
            "¹": ["ဎ", "္", "\u0000"],
            "½": ["ရ"],
            "¾": ["္", "ဂ"],
            "Á": ["္", "ဗ"],
            "Å": ["္", "တ"],
            "Æ": ["္", "ဇ"],
            "Ç": ["္", "ဘ"],
            "Í": ["ဥ"],
            "Ð": ["င", "်", "္", "ီ"],
            "Ñ": ["္", "ဈ"],
            "Ó": ["ဉ", "ာ"],
            "Ö": ["္", "ဏ"],
            "×": ["ဍ", "္", "\u0000"],
            "Ø": ["င", "်", "္", "ိ"],
            "Ü": ["္", "ပ"],
            "ß": ["ျ"],
            "ä": ["္", "ဆ"],
            "å": ["္", "တ"],
            "æ": ["္", "ဖ"],
            "é": ["္", "န"],
            "ê": ["ြ", "ု"],
            "ð": ["ိ", "ံ"],
            "ñ": ["ည"],
            "ö": ["္", "စ"],
            "ø": ["င", "်", "္", "ံ"],
            "ú": ["္", "က"],
            "û": ["ြ", "ု"],
            "’": ["္", "လ"]
        }
    },
    "key": {}
};

// Note: "\u0000", unicode null character is space character in ASCII and has the char code value of 0.

var debug = true;


function toCodeToIndex(codes) {
    var map = {};
    for (var i = 0; i < codes.length; i++) {
        var charCode = String(codes[i]);
        if (typeof map[charCode] == 'undefined')
            map[charCode] = i;
    }
    return map;
}

function fillZero(str, len) {
    str = String(str);
    while (str.length < len) {
        str = "0" + str;
    }
    return str;
}

function fillZeroIfLenLessThan3(str) {
    return fillZero(str, 3);
}

function to0xStr(str) {
    return "0x" + fillZeroIfLenLessThan3(str);
}

/*
// add slash to regex chars so that the str won't have regexp chars
// it will matches all these characters literally
function addBackSlash(str) {
//    return str.replace(/([!"#$%&'()*+,-./:;?@\[\\\]_`{|}~])/g, '\\$1');
    return str.replace(/([\^!"#\$%&'\(\)\*\+,\-\./:;\?@\[\\\]_`{|}~])/g, '\\$1');
}
*/

function regexEscaped(str) {
    //return new RegExp(addBackSlash(str), "g");
    return new RegExp(escapePattern(str), "g");
}

// taken from http://phpjs.org/functions/preg_quote/
function escapePattern(str, delimiter) {
    return String(str)
        .replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + (delimiter || '') + '-]', 'g'), '\\$&');
}


function convertText(srcText, srcFontName, dstFontName) {
    debug && console.log(srcFontName + ' to ' + dstFontName + ' ...');

    if (srcFontName == 'charcode' || srcFontName == 'codepoint' || dstFontName == 'charcode' || dstFontName == 'codepoint') {
        return convertToCode(srcText, srcFontName, dstFontName);
    }

    var src = F[srcFontName];
    var dst = F[dstFontName];

    srcText = fixSrcOrder(src, srcText);

    var dstText = convertSrcTextChars(src, srcText, dst);

    dstText = fixDstOrder(dst, dstText);

    debug && console.log("done " + srcFontName + ' to ' + dstFontName);
    return dstText;
}

function fixSrcOrder(src, srcText) {

    if (src.order && src.order.consonant && src.order.consonant.rev) {
        // if the source font is unicode font (e.g. Myanmar3) i.e. it has order consonant
        // reverse consonant chars position on ['rev']
        var rev = src.order.consonant.rev;
        for (var k in rev) {
            var re = new RegExp (k, "g");
            if (re.test(srcText)) {
                srcText = srcText.replace(re, rev[k]);
                debug && console.log("srcText replace: order consonant rev: " + k + "with " + rev[k]);
            }
        }
    }

    return srcText;
}

function replaceMappedSrcCharWith0xIndexes(src, srcText) {

    for (var code in src.code_to_indexes) {
        var indexes_0x = "";

        for (var i in src.code_to_indexes[code]) {
            indexes_0x += to0xStr(src.code_to_indexes[code][i]);
        }

        var mappedChar = String.fromCharCode(code);
        if (srcText.indexOf(mappedChar) != -1) {
            var re = regexEscaped(mappedChar);
            srcText = srcText.replace(re, indexes_0x);
            debug && console.log("srcText replace: mappedChar: " + mappedChar + " with indexes_0x: " + indexes_0x);
        }
    }

    return srcText;
}

function convertSrcTextChars(src, srcText, dst) {

    srcText = replaceMappedSrcCharWith0xIndexes(src, srcText);

    var dstText = "";
    var codeToIndex = toCodeToIndex(src.codes);

    var hexLen = 0;
    var hexChars = '';

    // looping srcText one char at a time
    for (var i = 0; i < srcText.length; i++) {
        var curChar = srcText.charAt(i);
        var nextChar = srcText.charAt(i + 1);

        if (curChar + nextChar == "0x") {
            hexLen = 5;
            hexChars = '';
        }

        // copy zero padded hex (e.g. 0x081) to dstText as it is
        // hex str or 0x str in srcText is converted using replaceMappedSrcCharWith0xIndexes
        if (hexLen > 0) {
            dstText += curChar;
            hexChars += curChar;
            hexLen--;
            if (hexLen == 0)
                debug && console.log('dstText append hexChars: ' + hexChars);
            continue;
        }

        var curCode = srcText.charCodeAt(i);

        if (curCode == 12) { // skip it (found it after "အဘိဓမ္မာပို့ချချက်" abhidhamma classnote file)
            debug && console.log('dstText skipping char code: ' + curCode);
            continue;
        }

        // copy char code less than 33 as it is
        if (curCode < 33) {
            dstText += curChar;
            //debug && console.log('dstText append curCode < 33: ' + curChar);
            continue;
        }

        var index = codeToIndex[curCode];

        // can't find the src char, just append the src char to dst
        if (typeof index == 'undefined') {
            dstText += curChar;
            debug && console.log('dstText append as it: ' + curChar);
        }
        // found corresponding char but no one-to-one matching char
        // append as hex str which we will convert later when looping dstText one char at a time
        else if (dst.codes[index] == 0) {
            var index_0x = to0xStr(index);
            dstText += index_0x;
            debug && console.log('*** dstText append index_0x: ' + index_0x);
        }
        // found one-to-one mapping char
        else {
            var mappedChar = toChar(dst.codes[index]);
            dstText += mappedChar;
            //debug && console.log('dstText append mappedChar: ' + mappedChar + ' from dstChar: ' + dst.codes[srcCharPos]);
        }

    } // end looping srcText

    dstText = replace0xIndexesAndMappedCharsInDstText(dst, dstText);
    dstText = replace0xIndexInDstText(dst, dstText);

    return dstText;
}

function replace0xIndexesAndMappedCharsInDstText(dst, dstText) {

    for (var code in dst.code_to_indexes) {
        var codeChar = toChar(code);

        if (dst.code_to_indexes[code].length > 1) {
            var indexes_0x = "";
            var mappedChars = "";

            for (var i = 0; i < dst.code_to_indexes[code].length; i++) {
                indexes_0x += to0xStr(dst.code_to_indexes[code][i]);
                mappedChars += toChar(dst.codes[dst.code_to_indexes[code][i]]);
            }

            if (indexes_0x && dstText.indexOf(indexes_0x) != -1) {
                var indexes_0x_regexp = regexEscaped(indexes_0x);
                dstText = dstText.replace(indexes_0x_regexp, codeChar);
                debug && console.log("dstText replace: indexes_0x: " + indexes_0x + " with codeChar: " + codeChar);
            }

            if (mappedChars && dstText.indexOf(mappedChars) != -1) {
                var mappedChars_regexp = regexEscaped(mappedChars);
                dstText = dstText.replace(mappedChars_regexp, codeChar);
                debug && console.log("dstText replace: mappedChars: " + mappedChars + " with codeChar: " + codeChar);
            }
        }
    }

    return dstText;
}

function replace0xIndexInDstText(dst, dstText) {

    for (var i = 0; i < dst.codes.length; i++) {
        var index_0x = to0xStr(i);
        var code = dst.codes[i];
        var codeChar = toChar(code);

        if (dstText.indexOf(index_0x) != -1 && code != 0) {
            var re = new RegExp(index_0x, "g");
            if (re.test(dstText)) {
                dstText = dstText.replace(re, codeChar);
                //debug && console.log("dstText replace: index_0x: " + index_0x + " with codeChar: " + codeChar);
            }
        }
    }

    return dstText;
}

function fixDstOrder(dst, dstText) {
    var k, re, i;

    if (dst.order) {

        if (dst.order.consonant) {
            var fwd = dst.order.consonant.fwd;
            for (k in fwd) {
                re = new RegExp(k, "g");
                if (re.test(dstText)) {
                    dstText = dstText.replace(re, fwd[k]);
                    debug && console.log("dstText replace: order consonant fwd: " + k + " with " + fwd[k]);
                }
            }
        }

        if (dst.order["before"]) {
            var before = dst.order["before"];
            for (k in before) {
                re = new RegExp(k, "g");
                if (re.test(dstText)) {
                    dstText = dstText.replace(re, before[k]);
                    debug && console.log("dstText replace: order before: " + k + " with " + before[k]);
                }
            }
        }

        if (dst.order["vowel"]) {
            var vowel = dst.order["vowel"];
            for (i = 0; i < vowel.length - 2; i++) {
                var vowelPattern = "([" + vowel.slice(i + 1).join("") + "]+)(" + vowel[i] + ")";
                re = new RegExp(vowelPattern, "g");
                if (re.test(dstText)) {
                    dstText = dstText.replace(re, "$2$1");
                    debug && console.log("dstText replace: order vowel: " + vowelPattern + " with " + "$2$1");
                }
            }
        }

        if (dst.order["after"]) {
            var after = dst.order["after"];
            for (k in after) {
                re = new RegExp(k, "g");
                if (re.test(dstText)) {
                    dstText = dstText.replace(re, after[k]);
                    debug && console.log("dstText replace: order after: " + k + " with " + after[k]);
                }
            }
        }

    }

    return dstText;
}

// ---------------- from code to char and from char to code

var COMMA = ',';

// to comma separated decimal char code
function toCharCodes(srcText) {
    var dstText = '';
    var sep = '';
    for (var i = 0; i < srcText.length; i++) {
        dstText += sep + srcText.charCodeAt(i);
        sep = COMMA;
    }
    return dstText;
}

function fromCharCodes(codes) {
    var dstText = '';
    var ary = codes.split(COMMA);
    for (var i = 0; i < ary.length; i++) {
        dstText += toChar(ary[i]);
    }
    return dstText;
}

// to comma separated unicode code point in this format: \uxxxx
function toCodePoints(srcText) {
    var dstText = '';
    var sep = '';
    for (var i = 0; i < srcText.length; i++) {
        dstText += sep + '\\u' + (srcText.charCodeAt(i) + 0x10000).toString(16).slice(1);
        sep = COMMA;
    }
    return dstText;
}

function fromCodePoints(charPoints) {
    var dstText = '';
    var ary = charPoints.split(COMMA);
    for (var i = 0; i < ary.length; i++) {
        dstText += toChar(parseInt('0x' + ary[i].slice(2)));
    }
    return dstText;
}

function convertToCode(srcText, srcFontName, dstFontName) {
    var dstText = srcText;

    if (dstFontName == 'charcode') {
        // to decimal char codes
        dstText = toCharCodes(srcText)
    }
    else if (dstFontName == 'codepoint') {
        // to \u hex codes
        dstText = toCodePoints(srcText)
    }
    else if (srcFontName == 'charcode') {
        dstText = fromCharCodes(srcText)
    }
    else if (srcFontName == 'codepoint') {
        dstText = fromCodePoints(srcText)
    }

    return dstText;
}
