$(document).ready(function() {

    $("#autocomplete-1").autocomplete({

      source: [
          { value: "iOS", url:'http://www.apple.com/ios/'},
          { value: "Android", url:'http://www.android.com/'},
          { value: "C++", url:'https://en.wikipedia.org/wiki/C%2B%2B'},
          { value: "Android Widgets", url:'http://developer.android.com/design/patterns/widgets.html'},
          { value: "Jquery", url:'https://jquery.com/'},
      ],
      
    select: function(event, ui){
      window.parent.location = ui.item.url;
    }

    });
      

});