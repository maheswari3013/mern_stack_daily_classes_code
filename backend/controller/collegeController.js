const Colleges=require("../model/CollegeModel")

//add college
const addclg=async(req,res)=>{
   try {
     const {name,code,address,departments,email,url}=req.body;
     const newCollege={
        name:name,
        code:code,
        address:address,
        departments:departments,
        email:email,
        url:url
     }
        await   Colleges.insertOne(newCollege);
        res.status(200).json({message:"New college record added successfully"});

   } catch (error) {
        res.status(500).json({message:'Failed to add clg record'});
   }
}


//get all colleges
const getAllColleges=async(req,res)=>{
    try {
        const foundColleges= await Colleges.find();
        if(foundColleges.length==0){
        return res.status(404).json({messages:"colleges not found"})
        } res.status(200).json({foundColleges})
        
    }catch (error) {
        res.status(500).json({message:"Failed to retrieve data"})
    }
}

//delete college
const deleteCollege=async(req,res)=>{
    try {
        const deleteDocument=await Colleges.findByIdAndDelete(req.params.id);
        console.log(deleteDocument);//to checl stored values in variable
        
        res.status(200).json({message:"Record deleted succesfully"})
    } catch (error) {
        res.status(500).json({message:'Failed to delete'})
    };
}


//get collge based on code
const getCollegeBasedOnID=async(req,res)=>{
  try{
  const  foundCollege=await Colleges.findById(req.params.id);
  res.status(200).json({foundCollege});
  }catch(error){
    res.status(500).json({ message: "Failed to get college details" });
  }
}
//update clg details
const updateCollegeDetails=async(req,res)=>{
    try {       
        const updateCollege = await Colleges.findByIdAndUpdate(req.params.id,
            req.body,
            {new:true},
        )
        res.status(200).json({ message: "updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to update college details" });
    }
}
//update college mail
const updateEmail=async(req,res)=>{
    try {
        const Updatedemail=await Colleges.findOneAndUpdate(
        {email:req.params.email},
        {email:req.body.email},
        {new:true}

    )
         res.status(200).json({ message: "updated email successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to update email details" });
    }
}
module.exports={addclg,getAllColleges,deleteCollege,getCollegeBasedOnID,updateCollegeDetails,updateEmail};

