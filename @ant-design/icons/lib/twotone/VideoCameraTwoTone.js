"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VideoCameraTwoTone = {
    name: 'video-camera',
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
                        d: 'M136 792h576V232H136v560zm64-488c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H208c-4.4 0-8-3.6-8-8v-48z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v576c0 35.3 28.7 64 64 64h592c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM712 792H136V232h576v560zm176-167l-104-59.8V458.9L888 399v226z',
                        fill: primaryColor
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M208 360h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z',
                        fill: primaryColor
                    }
                }
            ]
        };
    }
};
exports.default = VideoCameraTwoTone;
