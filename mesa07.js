console . log (!true) ;  // Falso
console . log (!false) ;  // Verdadeiro
console . log (!! false,true) ; _ // Falso, Falso  
console. log (!! true) ;  // Verdadeiro
console . log (! 1) ;  // Falso, porque o 0 é falso e 1 é Verdadeiro, ai com a (!) o resultado mudou.
console . log (! 1) ; _ // Verdadeiro 
console . log (! 0) ;  // Verdadeiro
console . log (! 0) ; _ // Falso 
consol . log (!! "" ) ;  // Falso

seja  x  =  5 ;
seja  y  =  9 ;
console . log ( x  < 10 && x !== 5 ) ;  // Falso
console. log ( x > 9 || x === 5 ) ;  // Falso
console . log (! ( x === y )) ;  // Verdadeiro

seja  a  =  10 ;
deixe  b  =  "a" ;
console . log ( b === "b" || a  >=  10 ) ;

seja  c  =  3 ;
seja  d  =  8 ;
! (c  ==  "3" || c ===  d)  && ! ( d  !==  8 && c  <= d ) ;

let  str  = "" ;
deixe  msg  = "haha!" ;
let  eBonito  = "falso" ;
console.log(!( ( str  ||  msg )  &&  eBonito)) ;