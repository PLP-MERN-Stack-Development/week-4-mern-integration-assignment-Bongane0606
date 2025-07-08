// Add near your other route imports
const categoryRoutes = require('./routes/categories');

// Add to middleware section
app.use('/api/categories', categoryRoutes);