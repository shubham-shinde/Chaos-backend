import { createFolder } from '../../filesystem/getDirInfo';
import fs from 'fs';


export default (req, res, next) => {
    const folderName = req.params.name;
    const fileName = req.params.filename;
    fs.readFile(`./static/${folderName}/${fileName}`, 'utf8', (e, data) => {
        if(e) next(e);
        else {
            res.send(data);
        } 
    })
}