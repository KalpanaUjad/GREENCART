import mongoose from "mongoose";

const connectDB = async() => {
   try{
      mongoose.connection.on('connected', () => console.log("database connected successfully")
      );

      await mongoose.connect(`${process.env.MONGODB_URI}/greencart`)
   }catch(err){
      console.error("Mongodb is not connected"+ err);
   }
}

export default connectDB;