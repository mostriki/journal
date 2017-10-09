(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function(body) {
  return body.split(" ").length;
};

Entry.prototype.getVowel = function(words) {
  var vowel = words.match(/[aeiou]/gi);
  if (vowel === null) {
    return 0
  } else {
    return vowel.length;
  }
}

Entry.prototype.getConsonants = function(words) {
  var consonants = words.replace(/[aeiou]/gi,'');
  if (consonants === null) {
    return 0
  } else {
    return consonants.length;
  }
}

Entry.prototype.getTeaser = function(body) {
  var teaser = body.match(/^(.*?)[.?!]/)[0];
  if (teaser.split(' ').length >= 8) {
    return teaser = teaser.split(' ').slice(0, 8).join(' ') + '...';
  } else {
    return teaser;
  }
}

// exporting Entry obj
exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#simpleEntry').submit(function(event) {
    event.preventDefault();
    console.log("anything");
    var title = $('#title').val();
    var body = $('#body').val();
    var simpleEntry = new Entry(title, body);
    // var count = simpleEntry.wordCount(body);
    // var vowel = simpleEntry.getVowel(body);
    // var consonant = simpleEntry.getConsonants(body);
    var teaser = simpleEntry.getTeaser(body);
    $('#titleName').append('<li><h3><span class="teaser">' + simpleEntry.title + '</span></h3></li>');
    $('#teaserName').append("<li>" + teaser + "</li>");
    // $('#teaserTitle').show();

    $('.teaser').last().click(function() {
      $('#bodyCopy').text(simpleEntry.body);
      $('#wordCount').text(simpleEntry.wordCount(simpleEntry.body));
      $('#vowelCount').text(simpleEntry.getVowel(simpleEntry.body));
      $('#consonantCount').text(simpleEntry.getConsonants(simpleEntry.body));
      $('#teaserName').hide(800);
      $('#counters').show(800);
    });
  });
});

},{"./../js/journal.js":1}]},{},[2]);
