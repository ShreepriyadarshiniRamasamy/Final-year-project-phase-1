"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SkinTwoTone = {
    name: 'skin',
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
                        d: 'M512 318c-79.2 0-148.5-48.8-176.7-120H182v196h119v432h422V394h119V198H688.7c-28.2 71.2-97.5 120-176.7 120z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M870 126H663.8c-17.4 0-32.9 11.9-37 29.3C614.3 208.1 567 246 512 246s-102.3-37.9-114.8-90.7a37.93 37.93 0 0 0-37-29.3H154a44 44 0 0 0-44 44v252a44 44 0 0 0 44 44h75v388a44 44 0 0 0 44 44h478a44 44 0 0 0 44-44V466h75a44 44 0 0 0 44-44V170a44 44 0 0 0-44-44zm-28 268H723v432H301V394H182V198h153.3c28.2 71.2 97.5 120 176.7 120s148.5-48.8 176.7-120H842v196z',
                        fill: primaryColor
                    }
                }
            ]
        };
    }
};
exports.default = SkinTwoTone;
