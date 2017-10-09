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
