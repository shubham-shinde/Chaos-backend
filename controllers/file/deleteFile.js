import fs from 'fs';


export default (req, res, next) => {
    const folderName = req.params.name;
    const fileName = req.params.filename;
    const text = req.body.text || '';
    try {
        fs.unlink(`./static/${folderName}/${fileName}`, (e) => {
            if(e) next(e);
            else res.send('File deleted')
        })
    }
    catch(err) {
        if(err) next(err);
    }
}