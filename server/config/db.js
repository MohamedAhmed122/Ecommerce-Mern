import mongoose from 'mongoose'


const connectDB = async () =>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log(`mongodb connected on ${connection.connection.host}` .cyan.underline)
    } catch (error) {
        console.log(`Error is comming from mongo connection ${error.message}`.red.bold )
        process.exit(1)
        
    }
}
export default connectDB