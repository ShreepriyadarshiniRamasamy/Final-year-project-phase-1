"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FlagTwoTone = {
    name: 'flag',
    theme: 'twotone',
    icon: function (primaryColor, secondaryColor) {
        return {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896' },
            children: [
                {
                    tag: 'path',
                    attrs: { fill: secondaryColor, d: 'M184 232h368v336H184z' }
                },
                {
                    tag: 'path',
                    attrs: {
                        fill: secondaryColor,
                        d: 'M624 632c0 4.4-3.6 8-8 8H504v73h336V377H624v255z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M880 305H624V192c0-17.7-14.3-32-32-32H184v-40c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V640h248v113c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32V337c0-17.7-14.3-32-32-32zM184 568V232h368v336H184zm656 145H504v-73h112c4.4 0 8-3.6 8-8V377h216v336z',
                        fill: primaryColor
                    }
                }
            ]
        };
    }
};
exports.default = FlagTwoTone;
