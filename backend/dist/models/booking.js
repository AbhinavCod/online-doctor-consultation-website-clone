"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.bookingSchema = new mongoose_1.default.Schema({
    fullName: { type: String, required: true, },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    disease: { type: String, required: true },
    details: { type: String, required: true },
    symptom: { type: String, required: true },
    date: { type: Date, required: true },
    userId: { type: String },
}, { timestamps: true });
const Booking = mongoose_1.default.model("OfflineBooking", exports.bookingSchema);
exports.default = Booking;
