const bcrypt=require('bcrypt');
const password="John@123"
const hashPassword=async(password)=>{
    const salt=await bcrypt.genSalt(10);
    console.log("Salt: ",salt);
    const hashedPassword=await bcrypt.hash(password,salt);
    console.log("Hashed Password: ",hashedPassword);
    const isMatch=await bcrypt.compare("John@123",hashedPassword);
    console.log("Is Match: ",isMatch)

}
hashPassword(password);
//hashPassword(password);
