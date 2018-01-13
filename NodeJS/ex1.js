/* Exercice 1 (NodeJS) */

/* by Othmane Kais */

var http = require('http');
var fs   = require('fs');

var server = http.createServer(function(req,res){
	res.writeHead(200);
	res.end("TP1 NODEJS : Manipulation des fichier à l'aide du module fs ");
});
server.listen(8000);

var PATH = console.log("le répertoire courant : " + __dirname); // affichage du répertoire courant
var ifexists = fs.existsSync(PATH+'monDossier');               // teste , si le nom de répertoire existe déja
    if( ifexists == false){
		fs.mkdir('monDossier',function(err){                   // Creationn du dossier
		if (err) console.log('erreur de création du fichier');
		});  
	}	
    else {
		console.log("le dossier que vius tenter de creée existe déja , essayer de le recréer avec un autre nom "); 
		 }	

