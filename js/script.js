$(window).load(function () {

    function dump(obj) {
        var out = '';
        for (var i in obj) {
            out += i + ": " + obj[i] + "\n";
        }

        var pre = document.createElement('pre');
        pre.innerHTML = out;
        document.body.appendChild(pre)
    }


    $("#main").click( function() {
      if($("#main").hasClass("selected")){
        return false;
      } else {
        load_main_tab();
      }
    });
	
	
	$("#stream").click( function() {
      if($("#stream").hasClass("selected")){
        return false;
      } else {
        load_stream_tab();
      }
    });
	
	$("#stream2").click( function() {
      if($("#stream2").hasClass("selected")){
        return false;
      } else {
        load_stream2_tab();
      }
    });
		
	$("#score").click(function (){
      if($("#score").hasClass("selected")){
        return false;
      } else {
        load_score_tab();
      }
    });
	
	$("#football").click( function() {
      if($("#football").hasClass("selected")){
        return false;
      } else {
        load_football_tab();
      }
    });

	$("#basketball").click(function (){
      if($("#basketball").hasClass("selected")){
        return false;
      } else {
        load_basketball_tab();
      }
    });
	
	$("#baseball").click(function (){
      if($("#baseball").hasClass("selected")){
        return false;
      } else {
        load_baseball_tab();
      }
    });
	
		$("#tennis").click(function (){
      if($("#tennis").hasClass("selected")){
        return false;
      } else {
        load_tennis_tab();
      }
    });
	
		$("#cricket").click(function (){
      if($("#cricket").hasClass("selected")){
        return false;
      } else {
        load_cricket_tab();
      }
    });
	
		$("#hockey").click(function (){
      if($("#hockey").hasClass("selected")){
        return false;
      } else {
        load_hockey_tab();
      }
    });
	
	$("#racing").click(function (){
      if($("#racing").hasClass("selected")){
        return false;
      } else {
        load_racing_tab();
      }
    });
	
	function load_score_tab()
    {
      if($("#media, #stream, #stream2, #basketball, #football, #baseball, #tennis, #cricket, #racing, #hockey").hasClass("selected")){
        $("#media, #stream, #stream2, #basketball, #football, #baseball, #tennis, #cricket, #racing, #hockey").removeClass("selected");
$("#frame-div *").remove();
      }
      $("#score").addClass("selected");
	  $( "#frame-div" ).load( "livescore.html" );
      
		$("#results *").fadeIn();
            $(".entry-div").hide();
            
        }
		function load_basketball_tab()
    {
      if($("#media, #stream, #stream2, #score, #football, #baseball, #tennis, #cricket, #racing, #hockey").hasClass("selected")){
        $("#media, #stream, #stream2, #score, #football, #baseball, #tennis, #cricket, #racing, #hockey").removeClass("selected");
$("#frame-div *").remove();
      }
      $("#basketball").addClass("selected");
	  $( "#frame-div" ).load( "basketball.html" );
      
		$("#results *").fadeIn();
            $(".entry-div").hide();
            
        }
	
	function load_stream_tab()
    {
      if($("#media, #score, #stream2, #basketball, #football, #baseball, #tennis, #cricket, #racing, #hockey").hasClass("selected")){
        $("#media, #score, #stream2, #basketball, #football, #baseball, #tennis, #cricket, #racing, #hockey").removeClass("selected");
$("#frame-div *").remove();
      }
      $("#stream").addClass("selected");
      $( "#frame-div" ).load( "livestreams.html" );
    

$("#results *").fadeIn();
            $(".entry-div").hide();

    }
	
	function load_stream2_tab()
    {
      if($("#media, #score, #stream, #basketball, #football, #baseball, #tennis, #cricket, #racing, #hockey").hasClass("selected")){
        $("#media, #score, #stream, #basketball, #football, #baseball, #tennis, #cricket, #racing, #hockey").removeClass("selected");
$("#frame-div *").remove();
      }
      $("#stream2").addClass("selected");
      $( "#frame-div" ).load( "livestreams2.html" );
    

$("#results *").fadeIn();
            $(".entry-div").hide();

    }
	
	function load_football_tab()
    {
      if($("#media, #score, #stream, #stream2, #basketball, #baseball, #tennis, #cricket, #racing, #hockey").hasClass("selected")){
        $("#media, #score, #stream, #stream2, #basketball, #baseball, #tennis, #cricket, #racing, #hockey").removeClass("selected");
$("#frame-div *").remove();
      }
      $("#football").addClass("selected");
      $( "#frame-div" ).load("football.html" );

$("#results *").fadeIn();
            $(".entry-div").hide();
            
    }
	
	function load_baseball_tab()
    {
      if($("#media, #score, #basketball, #football, #tennis, #cricket, #racing, #hockey, #stream, #stream2").hasClass("selected")){
        $("#media, #score, #basketball, #football, #tennis, #cricket, #racing, #hockey, #stream, #stream2").removeClass("selected");
$("#frame-div *").remove();
      }
      $("#baseball").addClass("selected");
      $( "#frame-div" ).load( "baseball.html" );
    
$("#results *").fadeIn();
            $(".entry-div").hide();
            
        }
		
			function load_tennis_tab()
    {
      if($("#media, #score, #basketball, #football, #baseball, #cricket, #racing, #hockey, #stream, #stream2").hasClass("selected")){
        $("#media, #score, #basketball, #football, #baseball, #cricket, #racing, #hockey, #stream, #stream2").removeClass("selected");
$("#frame-div *").remove();
      }
      $("#tennis").addClass("selected");
      $( "#frame-div" ).load( "tennis.html" );
    
$("#results *").fadeIn();
            $(".entry-div").hide();
            
        }
		
			function load_cricket_tab()
    {
      if($("#media, #score, #basketball, #football, #baseball, #tennis, #hockey, #racing, #stream, #stream2").hasClass("selected")){
        $("#media, #score, #basketball, #football, #baseball, #tennis, #hockey, #racing, #stream, #stream2").removeClass("selected");
$("#frame-div *").remove();
      }
      $("#cricket").addClass("selected");
      $( "#frame-div" ).load( "cricket.html" );
    
$("#results *").fadeIn();
            $(".entry-div").hide();
            
        }
		
	function load_hockey_tab()
    {
      if($("#media, #score, #basketball, #football, #baseball, #tennis, #cricket, #racing, #stream, #stream2").hasClass("selected")){
        $("#media, #score, #basketball, #football, #baseball, #tennis, #cricket, #racing, #stream, #stream2").removeClass("selected");
$("#frame-div *").remove();
      }
      $("#hockey").addClass("selected");
      $( "#frame-div" ).load( "hockey.html" );
    
$("#results *").fadeIn();
            $(".entry-div").hide();
            
        }
		
	function load_racing_tab()
    {
      if($("#media, #score, #basketball, #football, #baseball, #tennis, #cricket, #stream, #stream2").hasClass("selected")){
        $("#media, #score, #basketball, #football, #baseball, #tennis, #cricket, #stream, #stream2").removeClass("selected");
$("#frame-div *").remove();
      }
      $("#racing").addClass("selected");
      $( "#frame-div" ).load( "racing.html" );
    
$("#results *").fadeIn();
            $(".entry-div").hide();
            
        }

    function load_main_tab()
    {
      if($("#media, #score, #stream, #stream2, #basketball, #football, #baseball, #tennis, #cricket, #racing, #hockey").hasClass("selected")){
        $("#media, #score, #stream, #stream2, #basketball, #football, #baseball, #tennis, #cricket, #racing, #hockey").removeClass("selected");
$("#frame-div *").remove();
      }
      $("#main").addClass("selected");
      var url = "http://www.scorespro.com/rss2/live-soccer.xml";
    
      $.ajax({
        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
        dataType: 'json',
        success: function(data) {
            var i = 0; 
            while (i < data.responseData.feed.entries.length) {
                $("ul#results").append(
                                                             '<li><a class="expand toggle" id="entry-' + i + '"> </a><a target="_blank" href="' + data.responseData.feed.entries[i].link + '" title="' + data.responseData.feed.entries[i].title + '">' + data.responseData.feed.entries[i].title + '</a><div id="entry-div-' + i + '" class="entry-div">' + data.responseData.feed.entries[i].contentSnippet + '  ' + data.responseData.feed.entries[i].publishedDate +'</div></p>');
                i = i + 1;
                
            }
$("#results *").fadeIn();

            $(".entry-div").hide();

            $(".toggle").toggle(function() {
      var id = $(this).attr("id").replace("entry-","");
                  $("#entry-div-" + id).slideDown();
                  $(this).removeClass("expand");
                  $(this).addClass("contract");
                }, function() {
      var id = $(this).attr("id").replace("entry-","");
                  $("#entry-div-" + id).slideUp();
                  $(this).removeClass("contract");
                  $(this).addClass("expand");
            });
            
        }
      });
    }
		 load_stream_tab();
	 });