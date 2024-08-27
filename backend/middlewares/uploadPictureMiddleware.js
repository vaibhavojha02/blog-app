import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination:(req,file,cb) =>{
    cb(null,path.join(__dirname,"../uploads"));
  },
  filename : (req,file,cb) => {
    cb(null,`${Date.now()}-${file.originalname}`);
  }
})

const uploadPicture = multer({
  storage:storage,
  limits : {
    fileSize: 1*1000000 // 1 mb
  },
  fileFilter:function (req,file,cb){
    //we are filtering file on the basis of fileextension in order to avoid uploading files of format other than photo
    let ext = path.extname(file.originalname) 
    if(ext !== '.png' || ext !=='.jpg' || ext !=='.jpeg'){
      cb(new Error("Only images are allowed"))
    }
    // To accept the file pass `true`, like so:
    cb(null,true);
    //null means no error encountered and true accepts the file pass means file is ready to be uploaded
  }
})
export  { uploadPicture };