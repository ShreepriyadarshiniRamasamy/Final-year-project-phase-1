"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WalletTwoTone = {
    name: 'wallet',
    theme: 'twotone',
    icon: function (primaryColor, secondaryColor) {
        return {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896' },
            children: [
                {
                    tag: 'path',
                    attrs: {
                        fill: primaryColor,
                        d: 'M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 464H528V448h312v128zm0-192H496c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h344v200H184V184h656v200z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        fill: secondaryColor,
                        d: 'M528 576h312V448H528v128zm92-104c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        fill: primaryColor,
                        d: 'M580 512a40 40 0 1 0 80 0 40 40 0 1 0-80 0z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        fill: secondaryColor,
                        d: 'M184 840h656V640H496c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32h344V184H184v656z'
                    }
                }
            ]
        };
    }
};
exports.default = WalletTwoTone;
