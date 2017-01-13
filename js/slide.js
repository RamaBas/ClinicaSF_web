/*$(document).ready(function(){
  defineSize();
});

function defineSize(){
  $('#slide_form .slide').each(function(i,el){
    $(el).css({
      'background-image' : 'url(img/slide'+(i+1)+')',
      'height' : ($('#slide_form').width()*1.1)+ 'px',
      'width' : $('#slide_form').width + "px"
    });
  });
}
*/

(function(){
  var currentPos=0;
  var arr_slide= $('#slide_form .slide');
  $(arr_slide[currentPos].children).css({'opacity':'1'});
  $(document).ready(function(){
    $(arr_slide[0]).css({
      'opacity':'1'
    });
    $(arr_slide[0]).css({'opacity':'1'});
    $(".left").on('click',function(e){
      move('left');
    });
    $(".right").on('click',function(e){
      move('right');
    });
    defineSize();
  });


  function defineSize(){
    $(arr_slide).each(function(i,el){
      $(el).css({
        'height' : ($('#slide_form').width()*0.15)+ 'px',
        'width' : $('#slide_form').width + "%"
      });
    });
  }
  function move(action){
    var lim = $(arr_slide).length-1;
    if (action === 'right'){
      $(arr_slide[currentPos].children).css({'opacity':'0'});
      currentPos= currentPos>=lim? currentPos=0 : ++currentPos;
      console.log(currentPos);
      $(arr_slide[currentPos].children).animate({'opacity':'1'});
    }else{
      $(arr_slide[currentPos].children).css({'opacity':'0'}); //invisible
      currentPos= currentPos<=0? currentPos=lim : --currentPos;
      console.log(currentPos);
      $(arr_slide[currentPos].children).animate({'opacity':'1'});
    }
  }
})();
