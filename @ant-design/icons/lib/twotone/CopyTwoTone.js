"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CopyTwoTone = {
    name: 'copy',
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
                        d: 'M232 706h142c22.1 0 40 17.9 40 40v142h250V264H232v442z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32z',
                        fill: primaryColor
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z',
                        fill: primaryColor
                    }
                }
            ]
        };
    }
};
exports.default = CopyTwoTone;
