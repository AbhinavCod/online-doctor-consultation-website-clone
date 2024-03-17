"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./routes/user"));
const auth_1 = __importDefault(require("./routes/auth"));
const booking_1 = __importDefault(require("./routes/booking"));
const stripe_1 = __importDefault(require("./routes/stripe"));
const getAppointments_1 = __importDefault(require("./routes/getAppointments"));
const path_1 = __importDefault(require("path"));
mongoose_1.default.connect(process.env.MONGODB_CONN_STRING).then(() => {
    console.log("COnnection Successfull");
}).catch(() => {
    console.log("NO Connection");
});
const port = process.env.PORT || 2000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, "../../frontend/dist")));
app.use("/api/user", user_1.default);
app.use("/api/auth", auth_1.default);
app.use("/api/booking", booking_1.default);
app.use("/api/stripe", stripe_1.default);
app.use("/api/getAppointments", getAppointments_1.default);
app.get("/", (req, res) => {
    res.json({ message: "I am live" });
});
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});
