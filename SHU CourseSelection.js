// ==UserScript==
// @name         SHU CourseSelection
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Select your course by one key
// @author       CSL
// @match        http://xk.shu.edu.cn*/CourseSelectionStudent/FastInput
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var CID=new Array(6);
    var TNo=new Array(6);
    CID[0]="";TNo[0]="";
    CID[1]="";TNo[1]="";
    CID[2]="";TNo[2]="";
    CID[3]="";TNo[3]="";
    CID[4]="";TNo[4]="";
    CID[5]="";TNo[5]="";
    //Your course here
    for (var i=0;i<6;i++)
    {
        if (CID[i]!=="" && TNo[i]!=="")
        {
         document.getElementById("CID"+i).value=CID[i];
         document.getElementById("TNo"+i).value=TNo[i];
        }
    }
    SubmitForm();
    // Your code here...
})();
