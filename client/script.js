
// document.addEventListener('DOMContentLoaded', () => {
//     const searchButton = document.getElementById('searchButton');
//     const searchInput = document.getElementById('searchInput');
//     const firearmsList = document.getElementById('firearms-list');

//     searchButton.addEventListener('click', async () => {
//         const searchTerm = searchInput.value.trim();

//         try {
//             let response;
//             if (searchTerm) {
//                 response = await axios.get(`http://localhost:3001/firearms/${searchTerm}`);
//             } else {
//                 response = await axios.get(`http://localhost:3001/firearms`);
//             }

//             firearmsList.innerHTML = '';
//             response.data.forEach(firearm => {
//                 const firearmItem = document.createElement('li');
//                 console.log(firearm)
//                 firearmItem.classList.add('firearmItem');
//                 firearmItem.innerHTML = `
//                     <h3>Name: ${firearm.name}</h3>
//                     <p>Caliber: ${firearm.caliber}</p>
//                     <p>Manufacturer: ${firearm.manufacturerId}</p>
//                     <p>History: ${firearm.history}</p>
//                     <img src="${firearm.Image}" alt="Firearm Image"/>
//                 `;
//                 firearmsList.appendChild(firearmItem);
//             });
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     });
// });



document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const firearmsList = document.getElementById('firearms-list');

    searchButton.addEventListener('click', async () => {
        const searchTerm = searchInput.value.trim();

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
                console.log(firearm);
                firearmItem.classList.add('firearmItem');
                firearmItem.innerHTML = `
                    <h3>Name: ${firearm.name}</h3>
                    <p>Caliber: ${firearm.caliber}</p>
                    <p>Manufacturer: ${firearm.manufacturerId}</p>
                    <p> Ownership:${firearm.Ownership}</p>
                    <p>History: ${firearm.history}</p>
                    <img src="${firearm.Image}" alt="Firearm Image"/>
                    
                `;
                firearmsList.appendChild(firearmItem);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });
});

