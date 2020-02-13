






$("#search-form").sumbit(function(event){
    event.preventDefault();
    var searchName = $("#search-term").val();
    var recordNumber = $("#record-number").val()
    var startYear = $("#start-year").val()
    var endYear=$("#end-year").val()
})

var queryUrl="https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchName+"&begin_date="+startYear+"&end_date="+endYear+"&api-key=EC5HXOCM9moGfxAAh4zTAuNx4TPwEu7M"
