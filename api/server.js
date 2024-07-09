const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, models } = require('./models');
const userRoutes = require('./routes/UserRoute');
const playlistRoutes = require('./routes/PlaylistRoute');
const likeRoutes = require('./routes/LikesRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/playlists', playlistRoutes);
app.use('/api/likes', likeRoutes);

sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });