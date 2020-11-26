import mongoose from 'mongoose'


const connectDB = async () =>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log(`mongodb connected on ${connection.connection.host}`)
    } catch (error) {
        console.log(`Error is comming from mongo connection ${error.message}`)
        process.exit(1)
        
    }
}
export default connectDB