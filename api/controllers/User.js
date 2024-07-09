const { User } = require('../models');
const bcrypt = require('bcrypt');

class userController{
    // Créer un utilisateur
    static async createUser(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }

        try {
        const { pseudo, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ pseudo, email, password: hashedPassword });
        res.status(201).json(user);
        } catch (err) {
        res.status(400).json({ message: err.message });
        }
    }

    // Se connecter
    static async login(req, res) {
        try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, secret, { expiresIn });
        res.status(200).json({ token });
        } catch (err) {
        res.status(400).json({ message: err.message });
        }
    }

    // Obtenir tous les utilisateurs
    static async getUsers (req, res) {
        try{
            const users = await User.findAll();

            if(users.length === 0){
                res.status(200).json({ message: "No users found"});
            } else{
                res.status(200).json(users);
            }
        } catch (err){
            res.status(400).json({ message: err.message})
        }
    }

    // Obtenir un utilisateur par son ID
    static async getUserByID (req, res){
        try {
            const id = req.params.id;
            const user = await User.findByPk(id);

            if(!user){
                res.status(200).json({ message: "No users found"});
            } else{
                res.status(200).json(user);
            }
        } catch (error){
            res.status(400).json({ message: error.message })
        }
    }

     // Mettre à jour un utilisateur par son ID
     static async updateUser(req, res) {
        try {
            const id = req.params.id;
            const { pseudo, email, password } = req.body;

            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            let hashedPassword = user.password;
            if (password) {
                hashedPassword = await bcrypt.hash(password, 10);
            }

            await user.update({
                pseudo: pseudo || user.pseudo,
                email: email || user.email,
                password: hashedPassword
            });

            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Supprimer un utilisateur par son ID
    static async deleteUser(req, res) {
        try {
            const id = req.params.id;

            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            await user.destroy();

            res.status(204).end(); // 204 pour une suppression réussie sans contenu
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = userController;