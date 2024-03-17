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
const stripe_1 = __importDefault(require("stripe"));
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../middleware/auth"));
const users_1 = __importDefault(require("../models/users"));
const booking_1 = __importDefault(require("../models/booking"));
const stripe = new stripe_1.default("sk_test_51Oh9rESBL00bWoeBfGU09jTWV32nzXycfT8BAOpEBuSsPYQEOboXhjqRLxWdGHxjv4Z3KeEFBGQoqHG2QRKeeIcF00jszOcLro");
const router = express_1.default.Router();
router.post("/payment-intent", auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const price = 149;
    const user = users_1.default.findOne({ email: email });
    if (!user) {
        return res.status(400).json({ message: "User not exists" });
    }
    const paymentIntent = yield stripe.paymentIntents.create({
        amount: 149,
        currency: "inr",
        metadata: {
            email: req.body.email
        },
    });
    if (!paymentIntent.client_secret) {
        return res.status(500).json({ message: "Error creating payment intent" });
    }
    const response = {
        paymentIntentId: paymentIntent.id,
        clientSecret: paymentIntent.client_secret.toString(),
        price: price
    };
    // console.log(response);
    res.send(response);
}));
router.post("/confirm-payment", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paymentIntentId = req.body.id;
        const paymentIntent = yield stripe.paymentIntents.retrieve(paymentIntentId);
        if (!paymentIntent) {
            return res.status(400).json({ message: "Payment not found" });
        }
        if (paymentIntent.status !== "succeeded") {
            return res.status(400).json({ message: `Paymnet intent status not succeeded. Status : ${paymentIntent.status}` });
        }
        const updatedUser = yield booking_1.default.findOneAndUpdate({ email: req.body.email }, {
            $push: { price: "149" }
        });
        yield (updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.save());
        res.status(200).json({ message: "Payment confirmed and added to account" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong!!!" });
    }
}));
exports.default = router;
