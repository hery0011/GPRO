
$('.back__button').click(function(){
 if(window.location.href.indexOf("division_scme") > -1){
     window.location.href = "tableau_direction_budget.html"
 }else if(window.location.href.indexOf("direction") > -1){
    window.location.href = "tableau_de_bord.html"
 }
})