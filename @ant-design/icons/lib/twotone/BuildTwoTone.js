"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BuildTwoTone = {
    name: 'build',
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
                        d: 'M144 546h200v200H144zm268-268h200v200H412z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M916 210H376c-17.7 0-32 14.3-32 32v236H108c-17.7 0-32 14.3-32 32v272c0 17.7 14.3 32 32 32h540c17.7 0 32-14.3 32-32V546h236c17.7 0 32-14.3 32-32V242c0-17.7-14.3-32-32-32zM344 746H144V546h200v200zm268 0H412V546h200v200zm0-268H412V278h200v200zm268 0H680V278h200v200z',
                        fill: primaryColor
                    }
                }
            ]
        };
    }
};
exports.default = BuildTwoTone;
