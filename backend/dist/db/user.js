"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
mongoose_1.default.connect("mongodb://localhost:27018/campusapp");
const userSchema = new Schema({
    uid: String,
    email: String,
    password: String
});
exports.User = mongoose_1.default.model("User", userSchema);
