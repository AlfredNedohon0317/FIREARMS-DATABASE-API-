const mongoose = require('mongoose')
mongoose
    .connect('mongodb://127.0.0.1:27017/firearmDatabase')
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })
mongoose.set('debug',true)
const db = mongoose.connection
module.exports = db



// mongoose.connect('mongodb://localhost:27017/your_database_name')
//     .then(() => {
//         console.log('Connected to MongoDB');
//         app.listen(PORT, () => {
//             console.log(`Server is running on port ${PORT}`);
//         });
//     })
//     .catch((error) => {
//         console.error('Error connecting to MongoDB:', error.message);
//     });
