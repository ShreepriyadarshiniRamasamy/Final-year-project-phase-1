"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ThunderboltTwoTone = {
    name: 'thunderbolt',
    theme: 'twotone',
    icon: function (primaryColor, secondaryColor) {
        return {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896' },
            children: [
                {
                    tag: 'path',
                    attrs: {
                        fill: secondaryColor,
                        d: 'M695.4 164.1H470.8L281.2 491.5h157.4l-60.3 241 319.8-305.1h-211z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M848.1 359.3H627.8L825.9 109c4.1-5.3.4-13-6.3-13H436.1c-2.8 0-5.5 1.5-6.9 4L170.1 547.5c-3.1 5.3.7 12 6.9 12h174.4L262 917.1c-1.9 7.8 7.5 13.3 13.3 7.7L853.6 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.3 732.5l60.3-241H281.2l189.6-327.4h224.6L487.1 427.4h211L378.3 732.5z',
                        fill: primaryColor
                    }
                }
            ]
        };
    }
};
exports.default = ThunderboltTwoTone;
