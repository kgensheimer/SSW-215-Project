var mysql      = require('mysql');
var AWS = require('aws-sdk');
//var jwt = require('./generateJWT.js');



// jwt.generateJWT({
// 					"username": "Booops", 
// 					"studentID": "bap",
// 					"teacherID": "wapa",
// 					"name": "Fack!"
				// });
// var awsmod = require('./awsmodule.js');

// var connection = mysql.createConnection({
//   host     : 'aap3l7gbraqrps.cwlgyiktk09c.us-east-1.rds.amazonaws.com',
//   port     :'3306',
//   user     : 'ngattuso',
//   password : 'marynick123',
//   database : 'ebdb'
// });
 
var connection = mysql.createConnection({
  host     : 'localhost',
  port     :'3306',
  user     : 'root',
  database : 'testdb'
});

var db = "testdb";

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

/*USE THIS TO CREATE NEW TEST RESOURCE TABEL*/
// connection.query('CREATE table recTable(className VARCHAR(40) NOT NULL, description VARCHAR(40) NOT NULL, semester VARCHAR(40) NOT NULL, profName VARCHAR(40) NOT NULL, notes VARCHAR(40) NOT NULL, filename  VARCHAR(40) NOT NULL)', function(err, results, fields){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log("success!");
// 	}
// });



//listofStudents

// var user = "marym"

// //results is an array, so have to check size of array before looking at specific results
connection.query('SELECT * from recTable', function(err, results, fields){
	if(err){
		console.log(err);
	} else {
		console.log(results);
	}
});

// // var studentUser = "maeve";

// // console.log(studentUser);
// // connection.query('INSERT into usersdb(teacher_id, userName, password, isTeacher) VALUES(0, ?, "mary123", false)', [studentUser], function(err, results, fields){
// // 	if(err){
// // 		console.log(err);
// // 	} else {
// // 		console.log(results);
// // 	}
// // });
// var db = "usersdb";

// connection.query('SELECT * from '+ db, function(err, results, fields){
// 	if(err){
// 		console.log("Error in getting user from database" + err);
// 	}else {
// 		if(results.length != 0){
// 			console.log("students exist");
// 		} else {
// 			console.log("0 students");
// 		}
// 		console.dir(results);

// 	}
// });

// // connection.query('TRUNCATE '+ db, function(err, results, fields){
// // 	if(err){
// // 		console.log("Error in getting user from database" + err);
// // 	}else {
// // 		if(results.length != 0){
// // 			console.log("students exist");
// // 		} else {
// 			console.log("0 students");
// 		}
// 		console.dir(results);

// 	}
// });

// connection.query('DESCRIBE usersdb', function(err, results, fields){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(fields);
// 	}
// });

// connection.end(function(err){
// 	if(err){
// 		console.log("error: " + err);
// 	}
// 	else{
// 		console.log("connection ended");
// 	}
// });

//var test = awsmod.verifyLogin("mary", "mary123");