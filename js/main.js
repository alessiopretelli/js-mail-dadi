var accettato, gioco;
gioco = 1;
var utenti = ["alessio@pretelli", "luca@pretelli", "nico@pretelli", "marco@pretelli", "walter@pretelli"];
alert("Benvenuto al Gioco dei Dadi, e' necessario essere registrati con la propria E-Mail per giocare.");
alert("hint: alessio@pretelli, luca@pretelli, nico@pretelli, marco@pretelli, walter@pretelli");
var utente = prompt("Prego, inserisci la tua E-Mail.");


for (i=0; i <= utenti.length; i++) {
    
    if(utenti[i] == utente) {
        accettato = 1;
    }

}

if (accettato == 1) {
    alert("Benvenuto " + utente  + "!");
    
    for (i = 0; i < gioco; i++) {    
        
        var dado_utente, dado_computer;

        alert("Lancia il dado.");
    
        dado_utente = Math.floor(Math.random() * 6) + 1;
        alert("Il numero uscito e' " + dado_utente + ".");
        alert("Il computer sta lanciando il dado.");
        dado_computer = Math.floor(Math.random() * 6) + 1;
        alert("Il numero uscito e' " + dado_computer + ".");
    
        if (dado_utente > dado_computer) {
            alert("Complimenti, hai vinto!");
            
        } else if (dado_computer > dado_utente) {
            alert("Il computer ha vinto.");
            
        } else {
            alert("I numeri usciti sono uguali.");
        }

        var reload = prompt("Premi il tasto 'R' e poi 'INVIO' per continuare a giocare o qualsiasi altro tasto e poi 'INVIO' per interrompere.");
        
        if (reload == "r") {
            gioco = ++gioco;
        }

    }

} else {
    alert("Ci spiace, la tua E-Mail non e' registrata nel nostro server.")
}