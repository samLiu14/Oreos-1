let cat = 100;

$(".yes1").click(function() {
    $(".q1").hide();
    $(".q2").show();
});

$(".yes2").click(function() {
    $(".q2").hide();
    $(".q3").show();
});

$(".enter").click(function() {
    let userNumber = $("input").val();
    let smth = userNumber*cat;
    console.log(smth);
    $("body").append("<h2>So like, you're gonna have like "+ smth +" cats. And you know that is just so CUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUTE!!!</h2>");
    $(".q3").hide();
});

$(".no1").click(function() {
    $(".q1").hide();
    $("body").append("<h2>So like, can't believe but you're like totally gonna die all alone, a virgin, wrinkly, and with no friends. Ugh, sucks to suck man, and honestly don't look at me for help, you did this to yourself.</h2>");
});

$(".no2").click(function() {
    $(".q2").hide();
    $("body").append("<h2>So like, can't believe but you're like totally gonna like just die alone. Like nothing totes special, you're just gonna be super boring. And like that's gotta suck majorly. And also, like, spend your I don't know 5 minutes happier. Maybe you'll get some friends last minute. Cause like, you're totes gonna die in 5 minutes.</h2>");
});