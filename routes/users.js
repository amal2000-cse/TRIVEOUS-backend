const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
//to update user profile
router.put('/:id',async (req,res)=>{
    if(req.body.userId==req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password =await bcrypt.hash(req.body.password,salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            },
            {
                new:true
            }
            );
            res.status(200).json(updatedUser);

        } catch (error) {
            res.status(500).json(error);
        }
    }else{
        return res.status(401).json({message:"Unauthorized"})
    }
})

module.exports = router;