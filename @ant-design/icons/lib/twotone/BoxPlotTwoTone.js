"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BoxPlotTwoTone = {
    name: 'box-plot',
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
                        d: 'M296 368h88v288h-88zm152 0h280v288H448z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M952 224h-52c-4.4 0-8 3.6-8 8v248h-92V304c0-4.4-3.6-8-8-8H232c-4.4 0-8 3.6-8 8v176h-92V232c0-4.4-3.6-8-8-8H72c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V548h92v172c0 4.4 3.6 8 8 8h560c4.4 0 8-3.6 8-8V548h92v244c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V232c0-4.4-3.6-8-8-8zM384 656h-88V368h88v288zm344 0H448V368h280v288z',
                        fill: primaryColor
                    }
                }
            ]
        };
    }
};
exports.default = BoxPlotTwoTone;
