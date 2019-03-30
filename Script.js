$(document).ready(function(){
   
    $('.red').click(function(){
    $('.red').fadeOut()
    
    });
    
    

   $('.green').click(function(){
    $('.blue').hide()
    
    });
    
    
     $('.yellow').click(function(){
    $('.blue').fadeIn()
    $('.green').fadeToggle()
    
    });
    
    
   $('.blue').click(function(){
    $('.green,.yellow,.red').toggle()
   
    
    });
    

    
    
    
 
    
    
    
    
    
});


