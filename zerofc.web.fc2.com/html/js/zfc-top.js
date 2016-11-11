(function(window,$,undefind){

  var numEntryNikki;

  $.getJSON("/js/config.json", function(json){
    numEntryNikki = json.blog.num;
  });

  google.load("feeds", "1");

  function initialize() {
    //iframeの高さ自動調整
    $('iframe').load(function(){
      if (this.contentWindow.document.documentElement.scrollHeight == 300) {
        var h = 0;
        // IE
        if( document.all ) {
            h = document.frames('blockrandom').document.body.scrollHeight;
            document.all.blockrandom.style.height = h + 20 + 'px';
        }
        // Misc
        else {
            h = document.getElementById('blockrandom').contentDocument.height;
            document.getElementById('blockrandom').style.height = h + 60 + 'px';
        }
      } else {
        $(this).height(this.contentWindow.document.documentElement.scrollHeight);  
      }
    });
    $('iframe').triggerHandler('load');
  
    var nikki_feed = new google.feeds.Feed("http://feeds.fc2.com/fc2/xml?host=zfcj.blog98");
    nikki_feed.setNumEntries(numEntryNikki); //エントリー数
    nikki_feed.load(function(result) {
    if (!result.error) {
      var container = $("#nikki-feed");
      var newsContainer = $("#nikki-news");
      var newsStr = "";
      for (var i=0; i<result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        var date = dateFormat(entry.publishedDate, 3);
        var category = entry.categories[0];
        var title = entry.title;
        var link = entry.link;
        newsStr = '<li>';
        newsStr += '<span style="color:#666666;">' + date + '</span>&nbsp;&nbsp;';
        newsStr += '<a href="' + link + '" title="' + title + '" target="_blank">[' + category + '] ' + title + '</a>';
        newsStr += '</li>';
        newsContainer.append(newsStr);
      }
      $("#nikki-loader").css("display","none");
      }
    });
  }

  function dateFormat(str, pattern) {
    var myDate=new Date(str);
    var YY = myDate.getFullYear();
    var MM = myDate.getMonth() + 1;
    var DD = myDate.getDate();
    var HR = myDate.getHours();
    var MN = myDate.getMinutes();
    if (MM < 10) {
      MM = "0" + MM;
    }
    if (DD < 10) {
      DD = "0" + DD;
    }
    if (HR < 10) {
      HR = "0" + HR;
    }
    if (MN < 10) {
      MN = "0" + MN;
    }
    switch (pattern) {
      case 1:
        var date = YY + "年" + MM + "月" + DD + "日";
        break;
      case 2:
        var date = MM + "/" + DD + " " + HR + ":" + MN;
        break;
      case 3:
        var date = YY + "." + MM + "." + DD;
        break;
      default:
        break;
    } 
    return date;
  }

  google.setOnLoadCallback(initialize);

})(window,jQuery);