document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const resetButton = document.getElementById('resetButton');
    const searchInput = document.getElementById('searchInput');
    const firearmsList = document.getElementById('firearms-list');

    const fetchFirearms = async (searchTerm = '') => {
        try {
            let response;
            if (searchTerm) {
                response = await axios.get(`http://localhost:3001/firearms?name=${encodeURIComponent(searchTerm)}`);
            } else {
                response = await axios.get(`http://localhost:3001/firearms`);
            }

            firearmsList.innerHTML = '';
            response.data.forEach(firearm => {
                const firearmItem = document.createElement('li');
                firearmItem.classList.add('firearmItem');
                firearmItem.innerHTML = `
                    <h3>Name: ${firearm.name}</h3>
                    <p>Caliber: ${firearm.caliber}</p>
                    <p>Manufacturer: ${firearm.manufacturerId}</p>
                    <p>Ownership:${firearm.Ownership}</p>
                    <p>History: ${firearm.history}</p>
                    <img src="${firearm.Image}"/>
                `;
                firearmsList.appendChild(firearmItem);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        fetchFirearms(searchTerm);
    });

    resetButton.addEventListener('click', () => {
        searchInput.value = '';
        fetchFirearms();
    });

    
    fetchFirearms();
});
