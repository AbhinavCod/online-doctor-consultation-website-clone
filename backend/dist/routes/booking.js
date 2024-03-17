"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const booking_1 = __importDefault(require("../models/booking"));
const auth_1 = __importDefault(require("../middleware/auth"));
const users_1 = __importDefault(require("../models/users"));
const router = express_1.default.Router();
router.post("/offline-booking", auth_1.default, [
    (0, express_validator_1.check)("fullName", "Full Name is required").isString(),
    (0, express_validator_1.check)("email", "Email is required").isEmail(),
    (0, express_validator_1.check)("phoneNumber", "Phone Number is required").isString(),
    (0, express_validator_1.check)("disease", "Specify the disease").isString(),
    (0, express_validator_1.check)("details", "Specify some detail about disease").isString(),
    (0, express_validator_1.check)("symptom", "Specify the symptom").isString(),
    (0, express_validator_1.check)("date", "Date is required").isDate(),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("hello");
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const user = yield users_1.default.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        let booking = new booking_1.default(req.body);
        booking._id = req.userId;
        user.bookings.push(booking);
        yield user.save();
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Booking Failed" });
    }
}));
exports.default = router;
