import { dirTree } from '../../filesystem/getDirInfo';


export default (req, res, next) => {
    const fileName = req.params.user;
    // const addressToObject = (files) => {
    //     var newfiles = files.map(element => {
    //         var a = element.split('/')
    //         a.shift()
    //         a.shift()
    //         return a;
    //     });
    //     return newfiles;
    // }
    console.log(process.env.PATH)
    var Info = dirTree(`./static/${fileName}`)
    res.send(Info);
}