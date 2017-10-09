var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#simpleEntry').submit(function(event) {
    event.preventDefault();
    console.log("anything");
    var title = $('#title').val();
    var body = $('#body').val();
    var simpleEntry = new Entry(title, body);
    var count = simpleEntry.wordCount(body);
    var vowel = simpleEntry.getVowel(body);
    var consonant = simpleEntry.getConsonants(body);
    var teaser = simpleEntry.getTeaser(body);
    $('#titleCopy').append(title);
    $('#bodyCopy').append(body);
    $('#wordCount').append(count);
    $('#vowelCount').append(vowel);
    $('#consonantCount').append(consonant);
    $('#teaser').append(teaser);
  });
});
