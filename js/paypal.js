// function payapl(){
//     // Constante
// const config = require("../config.json");
// const Paypal = require("./paypal")
// var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database(':memory:');

// db.serialize(function() {
//   db.run("CREATE TABLE lorem (info TEXT)");

//   var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//   for (var i = 0; i < 10; i++) {
//       stmt.run("Ipsum " + i);
//   }
//   stmt.finalize();

//   db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
//     if(err){
//       console.log("Err Select")
//     }else{
//       console.log(row.id + ": " + row.info);
//     }
      
//   });
// });

// db.close();

// paypal.Button.render({
//     env: 'sandbox', // Ou 'production',
//     commit: true, // Affiche le bouton  "Payer maintenant"
//     style: {
//         color: 'gold', // ou 'blue', 'silver', 'black'
//         size: 'responsive' // ou 'small', 'medium', 'large'
//     // Autres options de style disponibles ici : https://developer.paypal.com/docs/integration/direct/express-checkout/integration-jsv4/customize-button/
//     },
//     payment: function(data, actions) {
//     /* 
//          * Création du paiement
//          */
//         console.log('paiement créé');
//     },
//     onAuthorize: function(data, actions) {
//     /* 
//          * Exécution du paiement 
//          */
//     },
//     onCancel: function(data, actions) {
//     /* 
//          * L'acheteur a annulé le paiement
//          */
//     },
//     onError: function(err) {
//     /* 
//          * Une erreur est survenue durant le paiement 
//          */
//     }
// }, '#bouton-paypal');
// }