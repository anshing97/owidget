// foundation 
$(document).foundation();


// some pre-defines 
var offRoadCars = 6;
var plantedTrees = 8;
var savedCarbon = 12;
var totalCars, totalTrees, totalCarbon;
totalCars = totalTrees = totalCarbon = 27; 

// make lint stop complaining 
var hb = window.Handlebars;

// need this for loop 
hb.registerHelper('times', function(n, block) {
  var accum = '';
  for (var i = 0; i < n; ++i) {
      accum += block.fn(i);
  }
  return accum;
});

var renderTemplate = function ( templateName, targetID, templateData ) {
  var tmpSource = $(templateName).html();
  var tmp = hb.compile(tmpSource);
  $(targetID).append(tmp(templateData));
};


// doc is ready 
$(function() {

  // do some templating 
  renderTemplate('#cars-template',
                  '#panel-cars',
                  { eco: offRoadCars,
                    guzzler: totalCars - offRoadCars } );

  renderTemplate('#tree-template',
                 '#panel-trees',
                 { growing: plantedTrees,
                   stomp: totalTrees - plantedTrees } );

  renderTemplate('#carbon-template',
                 '#panel-carbon',
                 { closed: savedCarbon,
                  open: totalCarbon - savedCarbon } );

  // dealing with animation ends 

  // stop car from fading 
  $('.i-car.is-eco').on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
    $(this).addClass("is-hidden").removeClass('is-eco');
  });

  // stop tree from growing 
  $('.i-tree.is-growing').on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
    $(this).addClass("is-grown").removeClass('is-growing');
  });

  // prefetch  
  var $title_text = $('h3');
  var $insight_text = $('.insight .reading-text');  

  // tab events 
  $('.tabs > dd').on('click',function() {
    var tag = $(this).children('a').attr('href').substr(1);

    switch ( tag ) {

      case 'panel-cars':
        $title_text.html('Last month, you helped put <strong>' + offRoadCars + ' cars</strong> off the road!');
        $insight_text.html('Great Job! You saved 218 kWh this month compared to the year before. That is enough to offset the energy used by six average sized cars for one month.');
        break;

      case 'panel-trees':
        $title_text.html('Last month, you planted <strong>' + plantedTrees + ' trees</strong> in the parks!');
        $insight_text.html('The 218 kWh you saved last month also equals the amount of carbon eight trees will sequester ten years after seeding.');
        break;

      case 'panel-carbon':
        $title_text.html('Last month, you captured <strong>' + savedCarbon + ' lbs</strong> of Carbon Dioxide!');
        $insight_text.html('The 218 kWh you saved is also equal to capturing 12 lbs of CO₂ and not released them to our atmposhere.');        
        break;

      default:
        window.console.log('unknown');
        break;


    }

  });

});