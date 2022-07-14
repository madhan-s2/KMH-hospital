import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const feedBackSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	mobile_Number: {
		type: Number,
		default: false
	},
	email_id: {
		type: String,
		default: false
	},
    feedback:{
        type:String,
        default:false
    }
});

const feedBack = mongoose.model("feedBack", feedBackSchema);

export default feedBack;