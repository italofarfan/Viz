$(function () {
    var austDay = new Date();
    date_end2 = new Date(2015, 15 - 1, 5);
    $('#defaultCountdown2').countdown({until: date_end2});
});



// Compatibilidad de navegadores
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement("style")
 
    msViewportStyle.appendChild(
        document.createTextNode(
            "@-ms-viewport{width:auto!important}"
        )
    )
 
    document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
}

