const inputFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the input form
    const username = document.querySelector('#username-input').value.trim();
    const email = document.querySelector('#email-input').value.trim();
    const dogBreed = document.querySelector('#dogBreed-input').value.trim();
    const dogName = document.querySelector('#dogName-input').value.trim();
    const dogSize = document.querySelector('#dogSize-input').value.trim();
    const temperament = document.querySelector('#temperament-input').value.trim();
    const activityLevel = document.querySelector('#activityLevel-input').value.trim();
    const playsWellWithOthers = document.querySelector('#playsWellWithOthers-input').value.trim();
    const preferredPark = document.querySelector('#preferredPark-input').value.trim();




    if (username && email && dogBreed && dogName && dogSize && temperament && activityLevel && playsWellWithOthers && preferredPark) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/input', {
        method: 'POST',
        body: JSON.stringify({ username, email, dogBreed, dogName, dogSize, temperament, activityLevel, playsWellWithOthers, preferredPark  }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  
  
  document
    .querySelector('.input-form')
    .addEventListener('submit', inputFormHandler);
  