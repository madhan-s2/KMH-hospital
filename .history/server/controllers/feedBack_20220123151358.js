import feedBacks from "../models/feedBack.js";

export const getFeedBack = async (req, res) => {
    try {
        const feedBack = await feedBacks.find();
        res.status(200).json(feedBack);
    }
    catch(error){
        console.log(error.message);
    }
}

export const createFeedBack =(req,res)=>{
  const feedBack = new feedBacks({
        name: req.body.name,
        mobile_Number:req.body.mobile_Number,
        email_id : req.body.email_id,
        feedback: req.body.feedback
  });
  feedBack.save();
  res.json(feedBack);
}


export const deleteFeedBack = (req,res)=>{
    const result = feedBacks.findByIdAndDelete(req.params.id);

    res.json(result)
}