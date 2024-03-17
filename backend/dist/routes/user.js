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
const users_1 = __importDefault(require("../models/users"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = express_1.default.Router();
router.post("/register", [
    (0, express_validator_1.check)("email", "This field is required").isEmail(),
    (0, express_validator_1.check)("password", "This field is required").isLength({ min: 8 }),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req.body);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() });
    }
    try {
        let user = yield users_1.default.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        user = new users_1.default(req.body);
        user.patient = true;
        user.doctor = false;
        yield user.save();
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, "ezTKcDwqnfcM8JvYDbNB7NBDkxAQ5TXw", { expiresIn: "1d" });
        res.cookie("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 86400000,
        });
        return res.status(200).json({ message: "User registered successfully 👌" });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Something went wrong 😒" });
    }
}));
router.post("/registerDoctor", [
    (0, express_validator_1.check)("email", "This field is required").isEmail(),
    (0, express_validator_1.check)("password", "This field is required").isLength({ min: 8 }),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req.body);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() });
    }
    try {
        let user = yield users_1.default.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        user = new users_1.default(req.body);
        user.patient = false;
        user.doctor = true;
        yield user.save();
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, "ezTKcDwqnfcM8JvYDbNB7NBDkxAQ5TXw", { expiresIn: "1d" });
        res.cookie("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 86400000,
        });
        return res.status(200).json({ message: "User registered successfully 👌" });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Something went wrong 😒" });
    }
}));
exports.default = router;
