const btn = document.querySelector('.btn');
    btn.addEventListener('click', function() {
      alert('Вы нажали на кнопку!');
    });   
    
    
    function validateForm() {
        var x = document.forms["myForm"]["fname"].value;
        if (x == "") {
          alert("Имя должно быть заполнено");
          return false;
        }
      }    
      
      function loadData() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
          }
        };
        xhttp.open("GET", "data.txt", true);
        xhttp.send();
      }



      document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
    
        // Отправка данных на бэкенд для аутентификации
    });
    
    document.getElementById("registerForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
    
        // Отправка данных на бэкенд для регистрации
    });

    const express = require("express");
    const bodyParser = require("body-parser");
    const mongoose = require("mongoose");
    
    const app = express();
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static("public"));
    app.set("view engine", "ejs");
    
    mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true, useUnifiedTopology: true });
    
    const userSchema = {
        email: String,
        password: String
    };
    const User = mongoose.model("User", userSchema);
    
    app.get("/", function(req, res) {
        res.sendFile(__dirname + "/login.html");
    });
    
    app.post("/login", function(req, res) {
        const email = req.body.email;
        const password = req.body.password;
    
        User.findOne({ email: email }, function(err, foundUser) {
            if (err) {
                console.log(err);
            } else {
                if (foundUser) {
                    if (foundUser.password === password) {
                        res.sendFile(__dirname + "/dashboard.html");
                    } else {
                        res.send("Invalid email or password.");
                    }
                } else {
                    res.send("User not found.");
                }
            }
        });
    });
    
    app.post("/register", function(req, res) {
        const newUser = new User({
            email: req.body.email,
            password: req.body.password
        });
        newUser.save(function(err) {
            if (err) {
                console.log(err);
                res.send("Error registering user.");
            } else {
                res.sendFile(__dirname + "/login.html");
            }
        });
    });
    
    app.listen(3000, function() {
        console.log("Server started on port 3000");
    });
    

    




    




