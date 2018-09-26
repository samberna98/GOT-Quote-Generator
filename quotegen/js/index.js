$(document).ready(function(){
    var newQuote;
    var newAuthor;
    getQuote();
  
  function getQuote(){
    var quotes = ["The man who passes the sentence should swing the sword.", "Chaos isn't a pit. Chaos is a ladder." , "The powerful have always preyed on the powerless. That’s how they became powerful in the first place.","A lion doesn’t concern himself with the opinions of a sheep.","Power resides where men believe it resides. It’s a trick. A shadow on the wall. And a very small man can cast a very large shadow.","A mind needs books like a sword needs a whetstone. That’s why I read so much.","There is only one god and his name is Death, and there is only one thing we say to Death: ‘Not today.’","Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.","Leave one wolf alive and the sheep are never safe."];
    var authors = ["Eddard Stark","Petyr Baelish","Tyrion Lannister","Tywin Lannister","Lord Varys","Tyrion Lannister","Syrio Forel","Tyrion Lannister","Arya Stark"];
    var randomNum = Math.floor(Math.random()*quotes.length);
    newQuote = quotes[randomNum];
    newAuthor = authors[randomNum];
    
    $(".quote").text('"'+newQuote+'"');
    $(".author").text(newAuthor);
  }
  
  $('#tweet').on("click", function(){
    window.open("https://twitter.com/intent/tweet?text="+newQuote+"-"+newAuthor);
  });
  
  $('#newQuote').on("click", function(){
    getQuote();
  });

});