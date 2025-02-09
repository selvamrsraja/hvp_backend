const db = require("../model");
const StatDetailSchema = db.statdetail;
const { check, validationResult } = require("express-validator");

exports.postStatdetail = [
    //validate form
    check("GST_type")
        .not()
        .isEmpty()
        .withMessage("GST_type is required"),
    check("GST_No")
        .not()
        .isEmpty()
        .isLength(15)
        .withMessage("GST_NO is required"),
    check("GST_Doc")
        .not()
        .isEmpty()
        .withMessage("GST_Doc is required"),
    check("PAN_No")
        .not()
        .isEmpty()
        .isLength(10)
        .withMessage("PAN_NO is required"),
    check("PAN_Doc")
        .not()
        .isEmpty()
        .withMessage("PAN_Doc is required"),
    check("CIN_No")
        .not()
        .isEmpty()
        .isLength({ min: 2, max: 20 })
        .withMessage("CIN_NO is required"),
    check("form_10f")
        .not()
        .isEmpty()
        .withMessage("form_10f is required"),
    check("pe_declaration")
        .not()
        .isEmpty()
        .withMessage("pe_declaration is required"),
    check("MSME_status")
        .not()
        .isEmpty()
        .withMessage("MSME_status is required"),
    check("MSME_No")
        .not()
        .isEmpty()
        .isLength({ min: 2, max: 20 })
        .withMessage("MSME_NO is required"),
    check("MSME_Doc")
        .not()
        .isEmpty()
        .withMessage("MSME_Doc is required"), 
    check("MSME_Type")
        .not()
        .isEmpty()
        .withMessage("MSME_Type is required"),
    check("TAN_No")
        .not(10)
        .isEmpty()
        .isLength({ min: 2, max: 20 })
        .withMessage("TAN_NO is required"),
    check("TAN_Doc")
        .not()
        .isEmpty()
        .withMessage("TAN_Doc is required"),
    check("Tax_residency")
        .not()
        .isEmpty()
        .withMessage("Tax_residency is required"),
async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    try {
        const statdetail = await StatDetailSchema.create({
            userid: req.body.userid,
            GST_type: req.body.GST_type,
            GST_No: req.body.GST_No,
            GST_Doc: req.body.GST_Doc,
            PAN_No: req.body.PAN_No,
            PAN_Doc: req.body.PAN_Doc,
            CIN_No: req.body.CIN_No,
            form_10f: req.body.form_10f,
            pe_declaration: req.body.pe_declaration,
            MSME_status: req.body.MSME_status,
            MSME_No: req.body.MSME_No,
            MSME_Doc: req.body.MSME_Doc,
            MSME_Type: req.body.MSME_Type,
            TAN_No: req.body.TAN_No,
            TAN_Doc: req.body.TAN_Doc,
            Tax_residency: req.body.Tax_residency,
        });
        res.send({
            message: "Statdetail was registered successfully!",
            status: "success",
            data: statdetail });
    } catch (err) {
        res.status(500).send({ 
            message: err.message || "Some error occurrer while creating the StatDetailSchema"
        });
    }
}
];

//update statutory details
exports.updateStatdetail = async (req, res) => {
    const userid = req.params.id;
    const updateStatdetail = await StatDetailSchema.update(req.body, {
        where: { userid: userid },
    })
    if(updateStatdetail[0]) {
        res.send({
            message: "Statdetail was updated successfully!",
            status: "success",
            data: updateStatdetail
        });
    } else {
        res.status(500).send({
            message: "Error updating Statdetail with id=" + id,
            status: "error",
            data: updateStatdetail
        });
    }
};
let directory_name = "uploads";
const path = require('path');
var multer = require('multer');
var ProfilePath = '';
var GST_DocPath = '';
var PAN_DocPath = '';
var form_10f_DocPath = '';
var PE_Declaration_DocPath = '';
var TAN_DocPath = '';
var MSME_DocPath = '';
var Tax_residency_DocPath = '';

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join( directory_name,'/'));
      
    },
    filename: (req, file, cb) => {
      console.log(file);
      var filetype = '';
    
      if (file.fieldname === "GST_Doc") { 
        console.log("GST_Doc")
        if (file.mimetype === 'image/gif') {
            filetype = 'gif';
            GST_DocPath = directory_name+ "/" +'GST_Doc-' + Date.now() + '.' + filetype;
         
          }
          if (file.mimetype === 'image/png') {
            filetype = 'png';
            GST_DocPath = directory_name+ "/" +'GST_Doc-' + Date.now() + '.' + filetype;
         
          }
          if (file.mimetype === 'image/jpeg') {
            filetype = 'jpg';
            GST_DocPath = "../uploads/" +'GST_Doc-' + Date.now() + '.' + filetype;
         
          }
          if (file.mimetype === 'application/pdf') {
            filetype = 'pdf';
            GST_DocPath = directory_name+ "/" + 'GST_Doc-' + Date.now() + '.' + filetype;
         
          }
          cb(null, 'GST_Doc-' + Date.now() + '.' + filetype);
      }
      if (file.fieldname === "PAN_Doc") { 
        console.log("PAN_Doc")
        if (file.mimetype === 'image/gif') {
            filetype = 'gif';
            PAN_DocPath = directory_name+ "/" +'PAN_Doc-' + Date.now() + '.' + filetype;
         
          }
          if (file.mimetype === 'image/png') {
            filetype = 'png';
            PAN_DocPath = directory_name+ "/" +'PAN_Doc-' + Date.now() + '.' + filetype;
         
          }
          if (file.mimetype === 'image/jpeg') {
            filetype = 'jpg';
            PAN_DocPath = "../uploads/" +'PAN_Doc-' + Date.now() + '.' + filetype;
         
          }
          if (file.mimetype === 'application/pdf') {
            filetype = 'pdf';
            PAN_DocPath = directory_name+ "/" + 'PAN_Doc-' + Date.now() + '.' + filetype;
         
          }
          cb(null, 'PAN_Doc-' + Date.now() + '.' + filetype);
      }
      if (file.fieldname === "form_10f_Doc") { 
        console.log("form_10f_Doc")
        if (file.mimetype === 'image/gif') {
            filetype = 'gif';
            form_10f_DocPath = directory_name+ "/" +'form_10f_Doc-' + Date.now() + '.' + filetype;
         
          }
          if (file.mimetype === 'image/png') {
            filetype = 'png';
            form_10f_DocPath = directory_name+ "/" +'form_10f_Doc-' + Date.now() + '.' + filetype;
         
          }
          if (file.mimetype === 'image/jpeg') {
            filetype = 'jpg';
            form_10f_DocPath = "../uploads/" +'form_10f_Doc-' + Date.now() + '.' + filetype;
         
          }
          if (file.mimetype === 'application/pdf') {
            filetype = 'pdf';
            form_10f_DocPath = directory_name+ "/" + 'form_10f_Doc-' + Date.now() + '.' + filetype;
         
          }
          cb(null, 'form_10f_Doc-' + Date.now() + '.' + filetype);
      }
      if (file.fieldname === "TAN_Doc") { 
        console.log("TAN_Doc")
        if (file.mimetype === 'image/gif') {
            filetype = 'gif';
            TAN_DocPath = directory_name+ "/" +'TAN_Doc-' + Date.now() + '.' + filetype;
         
          }
          if (file.mimetype === 'image/png') {
            filetype = 'png';
            TAN_DocPath = directory_name+ "/" +'TAN_Doc-' + Date.now() + '.' + filetype;
         
          }
          if (file.mimetype === 'image/jpeg') {
            filetype = 'jpg';
            TAN_DocPath = "../uploads/" +'TAN_Doc-' + Date.now() + '.' + filetype;
         
          }
          if (file.mimetype === 'application/pdf') {
            filetype = 'pdf';
            TAN_DocPath = directory_name+ "/" + 'TAN_Doc-' + Date.now() + '.' + filetype;
         
          }
          cb(null, 'TAN_Doc-' + Date.now() + '.' + filetype);
      }
      if (file.fieldname === "PE_Declaration_Doc") { 
        console.log("PE_Declaration_Doc")
        if (file.mimetype === 'image/gif') {
            filetype = 'gif';
            PE_Declaration_DocPath = directory_name+ "/" +'PE_Declaration_Doc-' + Date.now() + '.' + filetype;
         
          }
          if (file.mimetype === 'image/png') {
            filetype = 'png';
            PE_Declaration_DocPath = directory_name+ "/" +'PE_Declaration_Doc-' + Date.now() + '.' + filetype;
         
          }
          if (file.mimetype === 'image/jpeg') {
            filetype = 'jpg';
            PE_Declaration_DocPath = "../uploads/" +'PE_Declaration_Doc-' + Date.now() + '.' + filetype;
         
          }
          if (file.mimetype === 'application/pdf') {
            filetype = 'pdf';
            PE_Declaration_DocPath = directory_name+ "/" + 'PE_Declaration_Doc-' + Date.now() + '.' + filetype;
         
          }
          cb(null, 'PE_Declaration_Doc-' + Date.now() + '.' + filetype);
      }
      if (file.fieldname === "MSME_Doc") { 
        console.log("MSME_Doc")
        if (file.mimetype === 'image/gif') {
            filetype = 'gif';
            MSME_DocPath = directory_name+ "/" +'MSME_Doc-' + Date.now() + '.' + filetype;
         
          }
          if (file.mimetype === 'image/png') {
            filetype = 'png';
            MSME_DocPath = directory_name+ "/" +'MSME_Doc-' + Date.now() + '.' + filetype;
         
          }
          if (file.mimetype === 'image/jpeg') {
            filetype = 'jpg';
            MSME_DocPath = "../uploads/" +'MSME_Doc-' + Date.now() + '.' + filetype;  
          }
          if (file.mimetype === 'application/pdf') {
            filetype = 'pdf';
            MSME_DocPath = directory_name+ "/" + 'MSME_Doc-' + Date.now() + '.' + filetype;
          }
          cb(null, 'MSME_Doc-' + Date.now() + '.' + filetype);
      }
      if (file.fieldname === "Tax_residency_Doc") { 
        console.log("TAN_Doc")
        if (file.mimetype === 'image/gif') {
            filetype = 'gif';
            Tax_residency_DocPath = directory_name+ "/" +'Tax_residency_Doc-' + Date.now() + '.' + filetype;
         
          }
          if (file.mimetype === 'image/png') {
            filetype = 'png';
            Tax_residency_DocPath = directory_name+ "/" +'Tax_residency_Doc-' + Date.now() + '.' + filetype;
         
          }
          if (file.mimetype === 'image/jpeg') {
            filetype = 'jpg';
            Tax_residency_DocPath = "../uploads/" +'Tax_residency_Doc-' + Date.now() + '.' + filetype;
         
          }
          if (file.mimetype === 'application/pdf') {
            filetype = 'pdf';
            Tax_residency_DocPath = directory_name+ "/" + 'Tax_residency_Doc-' + Date.now() + '.' + filetype;
         
          }
          cb(null, 'Tax_residency_Doc-' + Date.now() + '.' + filetype);
      } 
    } 
  });
//savestatutory
exports.saveStatutoryDetail = (req, res) => {
    console.log("wrk");
    var upload = multer({ storage: storage }).fields(
        [
          {
            name: 'GST_Doc',
            maxCount: 1
          },
          {
            name: 'PAN_Doc',
            maxCount: 1
          },
          {
            name: 'form_10f_Doc',
            maxCount: 1
          },
          {
            name: 'TAN_Doc',
            maxCount: 1
          },
          {
            name: 'PE_Declaration_Doc',
            maxCount: 1
          },
          {
            name: 'MSME_Doc',
            maxCount: 1
          },
          {
            name: 'Tax_residency_Doc',
            maxCount: 1
          },
        ]);
    upload(req, res, function (err) {
        if (err) {
            console.log("InsideErr", err);
            return "err";
          }
          else
          {
            const GST_type=req.body.GST_type;
            const GST_No=req.body.GST_No;
            const GST_Doc = GST_DocPath;
            const PAN_No=req.body.PAN_No;
            const PAN_Doc = PAN_DocPath;
            const form_10f_Doc = form_10f_DocPath;
            const TAN_Doc = TAN_DocPath;
            const PE_DeclarationNo=req.body.PE_DeclarationNo;
            const PE_Declaration_Doc = PE_Declaration_DocPath;
            const MSME_Doc = MSME_DocPath;
            const Tax_residency_Doc = Tax_residency_DocPath;
            const CIN_No=req.body.CIN_No;
            const form_10f=req.body.form_10f;
            const MSME_status=req.body.MSME_status;
            const MSME_No=req.body.MSME_No;
            const MSME_Type=req.body.MSME_Type;
            const TAN_No=req.body.TAN_No;
            const Tax_residency_No=req.body.Tax_residency_No;
            const StatutoryId='Statutory' + Math.floor(100000 + Math.random() * 900000);
            const userId=req.body.userId;
            const user = new StatDetailSchema({
              StatutoryId:StatutoryId,
              userId:userId,
              GST_type:GST_type,
              GST_No:GST_No,
              GST_Doc: GST_Doc,
              PAN_No:PAN_No,
              PAN_Doc: PAN_Doc,
              form_10f_Doc:form_10f_Doc,
              TAN_Doc:TAN_Doc,
              PE_DeclarationNo:PE_DeclarationNo,
              PE_Declaration_Doc:PE_Declaration_Doc,
              MSME_Doc:MSME_Doc,
              Tax_residency_Doc:Tax_residency_Doc,
              CIN_No: CIN_No,
              form_10f:form_10f,
              MSME_status:MSME_status,
              MSME_No:MSME_No,
              MSME_Type:MSME_Type,
              TAN_No:TAN_No,
              Tax_residency_No:Tax_residency_No
              
          });
          user.save()
          .then(result => {
            return res.status(200).json({ status: "success", message: "Registered Successfully", result });
          })
          }
        })
}  