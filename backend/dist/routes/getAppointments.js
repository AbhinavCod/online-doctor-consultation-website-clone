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
const auth_1 = __importDefault(require("../middleware/auth"));
const users_1 = __importDefault(require("../models/users"));
const router = express_1.default.Router();
router.post("/get-my-offlineaAppointments", auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.userId);
    try {
        const user = yield users_1.default.findOne({ _id: req.userId });
        return res.status(200).json(user === null || user === void 0 ? void 0 : user.bookings);
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Error getting appointments" });
    }
}));
exports.default = router;
