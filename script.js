function calpourcentage(val)
{
  var result ;
   if(val > 0 && val <= 3500)
  {
     result = 50 ;
  }
  else if(val >= 233000 && val <= 500000)
  {
    result = 3500 ;
  }
  else if(val >= 233000 && val <= 500000)
  {
    result = 3500 ;
  }else{
    var a = 0;
    while(val >= 500000)
    {
      a = parseInt(a)+3500 ;
      val -= 500000 ;
    }
    result = parseInt(a) + val*0.015 ;

  }
  return parseInt(result);
}
$(document).ready(function(){
  $('.val').bind('keyup mouseup',function(){
    var val = $('.val').val() ;
    $('.amount').text(calpourcentage(val));;
    $('.amount').counterUp(function(){
      time:1200;
   });
  });

})
