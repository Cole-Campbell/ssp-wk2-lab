//Calls the File System module of JavaScript and created a variable of 0
var fs = require("fs");
var x = 0;

//Reads and displays files in directory
console.log("About to call fs.readdir");
fs.readdir("./", onDirContents);

function onDirContents(err, files){
	console.log("Got the contents of the directory.")
 	// Loop through the array, there are a few ways of going this
 	for (var i in files) {
 		console.log("File:" + files[i]);
 		
 		//Was
 		//fs.readfile("file1.txt","utf8",function (error,data));

 		//Should have been
 		//looks for files not equal to the name app.js. Reads through the Directory and
 		//reads the content of each file.
 		if(files[i] != "app.js"){
 			fs.readFile(files[i], {encoding: "utf8", flag: "r"}, function(error,data){
 				
 				console.log("Contents of " + files[i] + "\n\n" + data);

 				x++
 				//Compares counter to the number of files to determine when complete
 				if(x == files.length -1){
 					console.log("All Done");
 				}
 			});
 		}
 	}
 }