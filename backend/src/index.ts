import express,{Request,Response} from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import userRoutes from "./routes/user";
import authRoutes from "./routes/auth";
import bookingRoutes from "./routes/booking";
import paymentRoutes from "./routes/stripe";
import appointmentsRoutes from "./routes/getAppointments";
import doctorRoutes from "./routes/doctor";
import path from "path";

mongoose.connect(process.env.MONGODB_CONN_STRING as string).then(()=>{
    console.log("COnnection Successfull");
}).catch(()=>{
    console.log("NO Connection");
})
const port = process.env.PORT || 2000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,"../../frontend/dist")));

app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/booking",bookingRoutes);
app.use("/api/stripe",paymentRoutes);
app.use("/api/getAppointments",appointmentsRoutes);
app.use("/api/doctor",doctorRoutes);

app.get("/",(req:Request,res:Response)=>{
    res.json({message:"I am live"});
});


app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
});