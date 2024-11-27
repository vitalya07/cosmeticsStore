// new Splide('.splide').mount();
// new Splide('.splide2').mount();

var elms = document.getElementsByClassName( 'splide' );

for ( var i = 0; i < elms.length; i++ ) {
  new Splide( elms[ i ] ).mount();
}