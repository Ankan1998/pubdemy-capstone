"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const UserSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        validate(val) {
            if (!validator_1.default.isEmail(val)) {
                throw new Error('Email invalid');
            }
        }
    },
    password: {
        type: String
    }
}, {
    timestamps: true
});
const User = mongoose_1.default.model('User', UserSchema);
exports.default = User;
