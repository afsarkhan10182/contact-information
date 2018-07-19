# Contact Information

I believe Node JS(npm) and Angular Cli is already installed.

git clone https://github.com/afsarkhan10182/contact-information.git

cd /contact-information

ng serve

Here we need a api which we consuming to add/update/delete Contacts in our Application

To install and run json server on your machine:

1.Run on your root directiory : npm install json-server --save

create db.json file and add below content:

[
  {
    "firstName": "afsar",
    "lastName": "khan",
    "email": "afsarkhan10182@gmail.com",
    "number": 8600000555,
    "status": "Active",
    "id": 1
  }
]

Add in package.json below line:

"scripts": {
    "json-server": "json-server --watch db.json"
  },

 Now go to project directory cd /contact-information 

 Run: npm install json-server

 Run: npm run json-server

 Now you can check   http://localhost:3000 to see the json server running, Then on clicking /posts you will see our data.Now Angular will communicate with this json server.

 Description:

 The Application has Contacts,contact-add and contact-update component
 It is basically a crud operation.