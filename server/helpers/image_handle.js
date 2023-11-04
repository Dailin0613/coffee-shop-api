import multer from 'multer'
import * as fs from 'node:fs'

const dir = 'src/images/'

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
}

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, dir)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
})

export const upload = multer({ storage: fileStorageEngine })

