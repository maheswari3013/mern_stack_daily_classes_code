const {addclg,getAllColleges,updateEmail,deleteCollege,getCollegeBasedOnID,updateCollegeDetails}=require("../controller/collegeController")
const express=require("express")
const router=express.Router();


router.post("/add-college",addclg)
router.get("/found-college",getAllColleges)
router.delete("/delete-college/:id",deleteCollege)
router.get("/get-college/:id",getCollegeBasedOnID)
router.put("/update-college/:id",updateCollegeDetails)
router.patch("/update-email/:email",updateEmail)

module.exports=router;