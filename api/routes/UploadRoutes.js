const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload'); // Importez le module d'upload

// Route POST pour télécharger un fichier
router.post('/upload', upload.single('image'), (req, res) => {
  try {
    // Si le fichier est téléchargé avec succès, req.file contiendra les informations sur le fichier
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Traitez les informations sur le fichier ici (par exemple, enregistrez le chemin du fichier dans une base de données)
    const filePath = req.file.path;
    res.status(200).json({ message: 'File uploaded successfully', filePath: filePath });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;