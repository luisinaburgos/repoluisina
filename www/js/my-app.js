  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;


var aux=0;
var total=0;
var aux2=0;





var app = new Framework7({
    
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/about/',
        url: 'about.html',
      },
    ]
    
  });




var mainView = app.views.create('.view-main');



// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);

 
});

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
    nombre1= $$("#nombre1").val();
    nombre2= $$("#nombre2").val();
    
    $$("#n1").text(nombre1);
    $$("#n2").text(nombre2);


    $$(".select1").change(function(){
  cambiarTotal(1);
}); 
       $$(".select2").change(function(){
  cambiarTotal(2);
}); 

    $$("#reiniciar").on('click', reiniciar);
    $$("#terminar").on('click', terminar);
    



function cambiarTotal (n) {
    for (i=1; i<=11; i++) {
    aux= $$("#j"+n +i).val();
    aux=parseInt(aux);
    total += aux;
    aux=0;
    }

    $$("#total"+n).text(""+total);
    total=0;
};
    
    function reiniciar () {
      
        for (i=0; i<=11; i++) {
            $$("#j1"+i).val(0);
            $$("#j2"+i).val(0);
        }
        $$("#total1").text("");
        $$("#total2").text("");

    };

      function terminar () {
        if ($$("#total1").text()>$$("#total2").text()) {
            alert(nombre1+" ha ganado la partida")
        }
        else {
            alert(nombre2+" ha ganado la partida")
        };
        

    }

  


  
















});





