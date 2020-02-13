






$("#search-form").on("submit", function(event){
    event.preventDefault();
    console.log("submit");
    
    var searchName = $("#search-term").val();
    var recordNumber = $("#record-number").val()
    var startYear = $("#start-year").val()
    var endYear=$("#end-year").val()
    if(!startYear){
        startYear = 19000101
    }
    if(!endYear){
        endYear = 20201231
    }
    if (!recordNumber){
        recordNumber = 12
    }
    if(!searchName){
        alert("Please enter search term!")
        return
    }
var queryUrl="https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchName+"&begin_date="+startYear+"&end_date="+endYear+"&api-key=EC5HXOCM9moGfxAAh4zTAuNx4TPwEu7M"

$.get(queryUrl, function(news){
    console.log(news.response)
    for(var i = 0; i <news.response.docs.length;i++){

    

        var main = $("#mainContent");
        var article = $("<div>")
        var articleTitle = $("<div>")
        articleTitle.text(news.response.docs[i].headline.main)
        main.append(articleTitle)
    }

})















})