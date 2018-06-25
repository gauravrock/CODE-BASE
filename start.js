console.log("hello");



$('.alert').hide()
$('#admin').click(function() {
    $(".alert")
    .slideDown(1000)
    .delay(2000)
    .slideUp();
});

$('.two').hide();
$('.Java').click(function() {
    $(".one").hide();
    $(".two").show();
});
$('.C').click(function() {
    $(".two").hide();
    $(".one").show();
});
//to hide the start_page when a link is clicked 
$('.tablinks').click(function() {
    $(".welcome").hide();
    
});


//adding functionality to sidenav
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
//to select a particular problem from sidenav
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        document.getElementById("mySidenav").style.width = "0";
       
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}  

