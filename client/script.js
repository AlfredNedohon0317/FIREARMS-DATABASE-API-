document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const searchByManufacturerButton = document.getElementById('searchByManufacturerButton');
    const resetButton = document.getElementById('resetButton');
    const searchInput = document.getElementById('searchInput');
    const manufacturerInput = document.getElementById('manufacturerInput');
    const firearmsList = document.getElementById('firearms-list');

    const fetchFirearms = async (searchTerm = '', manufacturerName = '') => {
        try {
            let response;
            if (searchTerm) {
                response = await axios.get(`http://localhost:3550/firearms?name=${encodeURIComponent(searchTerm)}`);
            } else if (manufacturerName) {
                response = await axios.get(`http://localhost:3550/firearms?manufacturer=${encodeURIComponent(manufacturerName)}`);
            } else {
                response = await axios.get(`http://localhost:3550/firearms`);
            }

            firearmsList.innerHTML = '';
            response.data.forEach(firearm => {
                const firearmItem = document.createElement('li');
                firearmItem.classList.add('firearmItem');
                firearmItem.innerHTML = `
                    <h3>Name: ${firearm.name}</h3>
                    <p>Caliber: ${firearm.caliber}</p>
                    <p>manufacturer: ${firearm.Manufacturer}</P>
                    <p>Manufacturer: ${firearm.manufacturerId}</p>
                    <p>Ownership: ${firearm.Ownership}</p>
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

    searchByManufacturerButton.addEventListener('click', () => {
        const manufacturerName = manufacturerInput.value.trim();
        fetchFirearms('', manufacturerName);
    });

    resetButton.addEventListener('click', () => {
        searchInput.value = '';
        manufacturerInput.value = '';
        fetchFirearms();
    });

   
    fetchFirearms();
});
