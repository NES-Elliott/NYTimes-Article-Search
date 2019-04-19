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
  })
}
runQuery(1, queryURLBase + "dogs")