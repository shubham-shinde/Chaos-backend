import { createFolder } from '../../filesystem/getDirInfo';


export default (req, res, next) => {
    const fileName = req.params.name;
    var Info = createFolder(`./static/${fileName}`, (err) => {
        //call back function transfered to mkdir.
        if(err) {
            if(err.code == 'EEXIST') {
                //file is already created.
                res.send('folder already exists')
            }
            else next('There is some problem in file system')
        }
        else res.send(Info);
    })
}