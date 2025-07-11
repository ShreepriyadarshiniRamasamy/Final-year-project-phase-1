"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SwitcherTwoTone = {
    name: 'switcher',
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
                        d: 'M184 840h528V312H184v528zm116-290h296v64H300v-64z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M880 112H264c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h576v576c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32z',
                        fill: primaryColor
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M752 240H144c-17.7 0-32 14.3-32 32v608c0 17.7 14.3 32 32 32h608c17.7 0 32-14.3 32-32V272c0-17.7-14.3-32-32-32zm-40 600H184V312h528v528z',
                        fill: primaryColor
                    }
                },
                {
                    tag: 'path',
                    attrs: { d: 'M300 550h296v64H300z', fill: primaryColor }
                }
            ]
        };
    }
};
exports.default = SwitcherTwoTone;
