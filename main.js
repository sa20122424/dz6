async function getPromise() {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
  
      const promises = data.results.map((item, index) => {
        return new Promise((resolve, reject) => {
          const box = document.createElement('div');
          box.className = 'box';
  
          const gender = document.createElement('p');
          gender.textContent = `Gender: ${item.gender}`;
          box.appendChild(gender);
  
          const name = document.createElement('p');
          name.textContent = `Title: ${item.name.title}`;
          box.appendChild(name);
  
          const firstName = document.createElement('p');
          firstName.textContent = `First Name: ${item.name.first}`;
          box.appendChild(firstName);
  
          const lastName = document.createElement('p');
          lastName.textContent = `Last Name: ${item.name.last}`;
          box.appendChild(lastName);
  
          const location = document.createElement('p');
          location.textContent = `Location: ${item.location.street.number} ${item.location.street.name}, ${item.location.city}, ${item.location.state}, ${item.location.country} ${item.location.postcode}`;
          box.appendChild(location);
  
          const email = document.createElement('p');
          email.textContent = `Email: ${item.email}`;
          box.appendChild(email);
  
          const login = document.createElement('p');
          login.textContent = `Login: ${item.login.username}`;
          box.appendChild(login);
  
          const dob = document.createElement('p');
          dob.textContent = `Date of Birth: ${item.dob.date} (Age: ${item.dob.age})`;
          box.appendChild(dob);
  
          const registered = document.createElement('p');
          registered.textContent = `Registered: ${item.registered.date} (Age: ${item.registered.age})`;
          box.appendChild(registered);
  
          const phone = document.createElement('p');
          phone.textContent = `Phone: ${item.phone}`;
          box.appendChild(phone);
  
          const cell = document.createElement('p');
          cell.textContent = `Cell: ${item.cell}`;
          box.appendChild(cell);
  
          const id = document.createElement('p');
          id.textContent = `ID: ${item.id.name} - ${item.id.value}`;
          box.appendChild(id);
  
          const picture = document.createElement('p');
          picture.textContent = `Picture: ${item.picture.large}`;
          box.appendChild(picture);
  
          const nat = document.createElement('p');
          nat.textContent = `Nationality: ${item.nat}`;
          box.appendChild(nat);
  
          document.body.appendChild(box);
          resolve();
        });
      });
  
      await Promise.all(promises);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  getPromise();
  