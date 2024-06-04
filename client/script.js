document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/firearms')
      .then(response => response.json())
      .then(data => {
        const firearmsList = document.getElementById('firearms-list');
        data.forEach(firearm => {
          const listItem = document.createElement('li');
          listItem.textContent = firearm.name;
          firearmsList.appendChild(listItem);
        });
      })
      .catch(error => console.error('Error fetching firearms:', error));
  });
  