(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.ReactIntlLocaleData || (g.ReactIntlLocaleData = {})).he = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[{locale:"he",pluralRuleFunction:function(e,t){var o=String(e).split("."),a=o[0],r=!o[1],n=Number(o[0])==e,i=n&&o[0].slice(-1);return t?"other":1==e&&r?"one":2==a&&r?"two":r&&(0>e||e>10)&&n&&0==i?"many":"other"},fields:{year:{displayName:"שנה",relative:{0:"השנה",1:"השנה הבאה","-1":"השנה שעברה"},relativeTime:{future:{one:"בעוד שנה",two:"בעוד שנתיים",many:"בעוד {0} שנה",other:"בעוד {0} שנים"},past:{one:"לפני שנה",two:"לפני שנתיים",many:"לפני {0} שנה",other:"לפני {0} שנים"}}},month:{displayName:"חודש",relative:{0:"החודש",1:"החודש הבא","-1":"החודש שעבר"},relativeTime:{future:{one:"בעוד חודש",two:"בעוד חודשיים",many:"בעוד {0} חודשים",other:"בעוד {0} חודשים"},past:{one:"לפני חודש",two:"לפני חודשיים",many:"לפני {0} חודשים",other:"לפני {0} חודשים"}}},day:{displayName:"יום",relative:{0:"היום",1:"מחר",2:"מחרתיים","-1":"אתמול","-2":"שלשום"},relativeTime:{future:{one:"בעוד יום {0}",two:"בעוד יומיים",many:"בעוד {0} ימים",other:"בעוד {0} ימים"},past:{one:"לפני יום {0}",two:"לפני יומיים",many:"לפני {0} ימים",other:"לפני {0} ימים"}}},hour:{displayName:"שעה",relativeTime:{future:{one:"בעוד שעה",two:"בעוד שעתיים",many:"בעוד {0} שעות",other:"בעוד {0} שעות"},past:{one:"לפני שעה",two:"לפני שעתיים",many:"לפני {0} שעות",other:"לפני {0} שעות"}}},minute:{displayName:"דקה",relativeTime:{future:{one:"בעוד דקה",two:"בעוד שתי דקות",many:"בעוד {0} דקות",other:"בעוד {0} דקות"},past:{one:"לפני דקה",two:"לפני שתי דקות",many:"לפני {0} דקות",other:"לפני {0} דקות"}}},second:{displayName:"שנייה",relative:{0:"עכשיו"},relativeTime:{future:{one:"בעוד שנייה",two:"בעוד שתי שניות",many:"בעוד {0} שניות",other:"בעוד {0} שניות"},past:{one:"לפני שנייה",two:"לפני שתי שניות",many:"לפני {0} שניות",other:"לפני {0} שניות"}}}}},{locale:"he-IL",parentLocale:"he"}];
},{}]},{},[1])(1)
});