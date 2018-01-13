var http = require('http');
var server = http.createServer(function(req,res){

	res.writeHead(200);

res.end();
});
server.listen(8000);

	var myTest = function(myTab){ 
	myTab = ['Developeur NodeJS','Developpeur Frond-end','Developpeur Back-end','Developpeur PHP'];
	var taille = myTab.length;
	var j = 0;
	for(var i=1 ; i < taille ; i++){
		if(myTab[i].length > 50){
			j++;
		}
	}

		console.log("le nombre d'élements dont la taille est supérieur à 50 est " + j);	
		module.exports = myTest;
}
myTest();
