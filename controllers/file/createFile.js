import { createFolder } from '../../filesystem/getDirInfo';
import fs from 'fs';


export default (req, res, next) => {
    const folderName = req.params.name;
    const fileName = req.params.filename;
    const text = req.body.text || '';
    try {
        var writeStream = fs.createWriteStream(`./static/${folderName}/${fileName}`)
        writeStream.write(text)
        writeStream.end()
        res.send('File updated')
    }
    catch(err) {
        if(err) next(err);
    }
}