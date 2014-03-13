// foundation 
$(document).foundation();var offRoadCars=6,plantedTrees=8,savedCarbon=12,totalCars,totalTrees,totalCarbon;totalCars=totalTrees=totalCarbon=27;var hb=window.Handlebars;hb.registerHelper("times",function(e,t){var n="";for(var r=0;r<e;++r)n+=t.fn(r);return n});var renderTemplate=function(e,t,n){var r=$(e).html(),i=hb.compile(r);$(t).append(i(n))};$(function(){renderTemplate("#cars-template","#panel-cars",{eco:offRoadCars,guzzler:totalCars-offRoadCars});renderTemplate("#tree-template","#panel-trees",{growing:plantedTrees,stomp:totalTrees-plantedTrees});renderTemplate("#carbon-template","#panel-carbon",{closed:savedCarbon,open:totalCarbon-savedCarbon});$(".i-car.is-eco").on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){$(this).addClass("is-hidden").removeClass("is-eco")});$(".i-tree.is-growing").on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){$(this).addClass("is-grown").removeClass("is-growing")});var e=$("h3"),t=$(".insight .reading-text");$(".tabs > dd").on("click",function(){var n=$(this).children("a").attr("href").substr(1);switch(n){case"panel-cars":e.html("Last month, you helped put <strong>"+offRoadCars+" cars</strong> off the road!");t.html("Great Job! You saved 218 kWh this month compared to the year before. That is enough to offset the energy used by six average sized cars for one month.");break;case"panel-trees":e.html("Last month, you planted <strong>"+plantedTrees+" trees</strong> in the parks!");t.html("The 218 kWh you saved last month also equals the amount of carbon eight trees will sequester ten years after seeding.");break;case"panel-carbon":e.html("Last month, you captured <strong>"+savedCarbon+" lbs</strong> of Carbon Dioxide!");t.html("You saved 291 kWh this month compared to the year before. That savings is enough to offset the energy consumtpion of six average size cards for one month");break;default:window.console.log("unknown")}})});