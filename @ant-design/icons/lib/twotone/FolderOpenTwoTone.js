"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FolderOpenTwoTone = {
    name: 'folder-open',
    theme: 'twotone',
    icon: function (primaryColor, secondaryColor) {
        return {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896' },
            children: [
                {
                    tag: 'path',
                    attrs: { fill: secondaryColor, d: 'M159 768h612.3l103.4-256H262.3z' }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z',
                        fill: primaryColor
                    }
                }
            ]
        };
    }
};
exports.default = FolderOpenTwoTone;
