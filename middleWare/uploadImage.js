const { GridFsStorage } = require('multer-gridfs-storage');
const multer = require('multer');

const storage = new GridFsStorage({
    url: `mongodb+srv://Demo:amit1234@cluster0.27whm.mongodb.net/?retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (req, file) => {
        const match = ["image/png", 'image/jpg'];
        
        if (match.indexOf(file.mimetype) === -1) {
            return `${Date.now()}-profile-${file.originalname}`;
        }
        
        return {
            bucketName: "photo",
            filename: `${Date.now()}-profile-${file.originalname}`
        }
        console.log('Upload Image');
    }
});
module.exports = multer({ storage });