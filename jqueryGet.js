//  jqueryGet.js



console.log('jQuery Loaded');

$(function () {
  //  on document load
  $('#github').click(function(evt){   //  on #github click

      evt.preventDefault();         //  disable defualt behavior

      const url= 'https://api.github.com/users/jmichaeln5';
      // const url= 'https://miami.craigslist.org/brw/';      // no access

    $.get(url, function(result){     // get data from url
      $('#output').append(getData(result));
    });
  });
})

function getData(result) {
  let output = "";
  output += "<ul>";
  for (const key in result){    // key is a placeholder     ex in ruby) |variable|
    output += "<li>";
    output += key + " - " + result[key];
    output += "</li>";
  }
  output += "</ul>";
  return output;
}




//
