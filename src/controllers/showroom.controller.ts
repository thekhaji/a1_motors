import {Request, Response} from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const showroomController: T = {};
const memberService = new MemberService();

showroomController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");
        
        res.send("Home Page!");
    } catch (error) {
        console.log("Error, goHome:", error);
    }
};

showroomController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");

        res.send("Signup Page!");
    } catch (error) {
        console.log("Error, getSignup:", error);
    }
};

showroomController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log("processSignup");
        
        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.SHOWROOM;

        const result = await memberService.processSignup(newMember);

        res.send(result);
    } catch (error) {
        console.log("Error, processSignup:", error);
        res.send(error);
    }
};

showroomController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");

        res.send("Login Page!");
    } catch (error) {
        console.log("Error, getLogin:", error);
    }
};

showroomController.processLogin = async (req: Request, res: Response) => {
    try {
        console.log("processLogin");
        console.log("body:", req.body);
        const input: LoginInput = req.body;
        const result = await memberService.porcessLogin(input);
        res.send("DONE!");
    } catch (error) {
        console.log("Error, processLogin:", error);
        res.send(error);
    }
};


export default showroomController;