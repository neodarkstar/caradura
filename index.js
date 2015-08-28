var wordPOS = require('wordpos'),
    wordpos = new wordPOS();
var _ = require('lodash');
var express = require('express');
var app = express();

// var message = 'Yordis, I need to talk to you about your deadlines. It seems like you keep missing the point and are difficult. You are in no position to question how much I do for this team.';
//

app.get('/caradura', function(req, res){
  caradura(req.query.msg, function(msg){
    res.send(msg);
  });
});

app.listen(8080);

function caradura(msg, callback){
  wordpos.getNouns(msg, function(nouns){

    wordpos.getVerbs(msg,function(verbs){

      var words = nouns.concat(verbs);

      words.forEach(function(word){
        var find = word;
        var re = new RegExp(find, 'g');
        msg = msg.replace(re, word.toUpperCase());
      });

      callback(msg);

    });

  });

}
