// ==UserScript==
// @name         SHU Evaluate
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Complete the evaluate automatically
// @author       CSL
// @match        http://cj.shu.edu.cn/StudentPortal/Evaluate
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var x = document.getElementsByTagName("select");
    for(var i = 0; i < x.length; i++)
    {
        x[i].selectedIndex = 1;
    }
    SaveEvaluate();
})();
