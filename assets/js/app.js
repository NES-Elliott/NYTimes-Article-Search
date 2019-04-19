var authKey = "OQNu1PWtltUyPArPJ75ACyJpsYiqNeN8" // register a key
var searchTerm = ""
var numResults = 0
var startYear = 0
var endYear = 0
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q="
var articleCounter = 0

function runQuery(numArticles, queryURL) {
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(NYTData) {
    console.log("-----------------")
    console.log("URL: " + queryURL)
    console.log("-----------------")
    console.log(NYTData)
    console.log("-----------------")

    for (var i = 0; i < numArticles; i++) {
      articleCounter++
      var wellSection = $("<section>")
      wellSection.addClass("well")
      wellSection.attr("id", "article-well-" + articleCounter)
      $("#well-section").append(wellSection)

      if (NYTData.response.docs[i].headline !== "null") {
        $("#article-well-" + articleCounter)
          .append(
            "<h3 class='articleHeadline'><span class='label label-primary'>" + 
            articleCounter + "</span><strong> " + 
            NYTData.response.docs[i].headline.main + "</strong></h3>"
          )
        console.log(NYTData.response.docs[i].headline.main)
      }
      
      if (NYTData.response.docs[i].byline && NYTData.response.docs[i].byline.original) {
        $("#article-well-" + articleCounter)
          .append("<h5>" + NYTData.response.docs[i].byline.original + "</h5>")
        console.log(NYTData.response.docs[i].byline.original)
      }

      $("#articleWell-" + articleCounter)
        .append("<h5>Section: " + NYTData.response.docs[i].section_name + "</h5>")
        .append("<h5>" + NYTData.response.docs[i].pub_date + "</h5>")
        .append(
          "<a href='" + NYTData.response.docs[i].web_url + "'>" + 
          NYTData.response.docs[i].web_url + "</a>"
        )
      console.log(NYTData.response.docs[i].pub_date)
      console.log(NYTData.response.docs[i].section_name)
      console.log(NYTData.response.docs[i].web_url)
    }
  })
}
runQuery(1, queryURLBase + "dogs")