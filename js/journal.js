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
