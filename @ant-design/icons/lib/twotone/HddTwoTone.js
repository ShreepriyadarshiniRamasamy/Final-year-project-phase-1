"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HddTwoTone = {
    name: 'hdd',
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
                        d: 'M232 888h560V680H232v208zm448-140c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zM232 616h560V408H232v208zm72-128c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H312c-4.4 0-8-3.6-8-8v-48zm-72-144h560V136H232v208zm72-128c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H312c-4.4 0-8-3.6-8-8v-48z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V680h560v208zm0-272H232V408h560v208zm0-272H232V136h560v208z',
                        fill: primaryColor
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M312 544h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H312c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0-272h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H312c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm328 516a40 40 0 1 0 80 0 40 40 0 1 0-80 0z',
                        fill: primaryColor
                    }
                }
            ]
        };
    }
};
exports.default = HddTwoTone;
