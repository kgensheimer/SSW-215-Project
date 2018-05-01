# SSW-215

This project was a Stevens SSW215 project that has the goal of allowing students from across campus to be able to share and rate different test resources to better prepare the whole community

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

### Installing

First download the code as a zip folder and place where you see fit

Then install node.js at https://nodejs.org/en/download/
Also install mysql and mysql workbench if you do not want to create databases and manage them via a terminal at https://www.mysql.com/downloads/

Once Node.js is installed, go to your terminal (I prefer Cygwin on windows or just the regular terminal on Mac) and navigate to the folder with the project in it, cd into startbootstrap-clean-blog-gh-pages folder, and run 
```
npm install
```
This will install all of the dependencies for the project. The dependencies that will be installed are as follows:

```
express, body-parser, express-fileupload, express-handlebars, path, nodemailer, mysql and their dependencies
```

Now those dependencies are downloaded, you can focus on the mysql database.
Follow the mysql instructions for creating your own database, and once it is running you are ready to set up a table that will hold all the tests.

Go to the /js folder in the startbootstrap-clean-blog-gh-pages folder and run 
```
node testDB.js
```

This should set up the database with all relevant fields to be able to run the appication.

If this runs without any error, control c to exit the session cd .. to get back to the directory with server.js

Create a folder in the startbootstrap-clean-blog-gh-pages folder called resource.

Then finally run the application run 
```
node server.js
```


## Authors

* **Mary McKeon** - *Initial work*

See also the list of [contributors](https://github.com/mmckeon16/SSW-215-Project/contributors) who participated in this project.

## License

No license now.

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc

