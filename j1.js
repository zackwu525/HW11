$().ready(function(){
  var tipColor=['red','yellow','orange','green'];
  
  function matchLevel(password){
    if(password.length===0){
        return -1;
    }
	else if(password.length>=1&&password.length<6){
		return 0;
	}
	else if(password.length>=6&&password.length<10){
		return 1;
	}
	else if(password.length>=10&&password.length<16){
		return 2;
	}
	else{
		return 3;
	}
  }

  $("#password>input").keyup(function(){
    var pass = $(this).val();
    var level = matchLevel(pass);
    
    for(var i = 0; i <= 3; i=i+1){
      if(i>level){
        $(".tips[level=\'"+i+"\']").css("background", "");
      }
      else{
        $(".tips[level=\'"+i+"\']").css("background", tipColor[i]);
      }
      
    }
      
  });


});