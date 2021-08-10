const router = require('express').Router();

console.log("render handlebars"); 

// "http://localhost:3000/petprofile"
router.get('/profile', (req, res) => {
    //load the handlebar file 
    res.render('profile');
  });

  //RENDER SIGNUP HANDLE BAR 
  router.get('/signup', (req, res) => {
    // // If the user is already logged in, redirect the request to another route
    // if (req.session.logged_in) {
    //   res.redirect('/dashboard');
    //   return;
    // }
  
    res.render('signup');
  });

  //RENDER SIGNUP HANDLE BAR 
  router.get('/login', (req, res) => {
    // // If the user is already logged in, redirect the request to another route
    // if (req.session.logged_in) {
    //   res.redirect('/dashboard');
    //   return;
    // }
  
    res.render('login');
  });

  //RENDER SIGNUP HANDLE BAR 
  router.get('/neighbourhood', (req, res) => {
    // // If the user is already logged in, redirect the request to another route
    // if (req.session.logged_in) {
    //   res.redirect('/dashboard');
    //   return;
    // }

  
    res.render('neighbourhood');
  });
  
  router.get('/input', (req, res) => {
    // // If the user is already logged in, redirect the request to another route
    // if (req.session.logged_in) {
    //   res.redirect('/dashboard');
    //   return;
    // }
  
    res.render('input');
  });

  router.get('/matches', (req, res) => {
    res.render('matches');
  })
  module.exports = router; 