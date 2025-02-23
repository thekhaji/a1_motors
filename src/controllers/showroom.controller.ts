import {Request, Response} from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const showroomController: T = {};
const memberService = new MemberService();

showroomController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");
        
        res.render("home");
    } catch (error) {
        console.log("Error, goHome:", error);
    }
};

showroomController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");

        res.render("signup");
    } catch (error) {
        console.log("Error, getSignup:", error);
    }
};

showroomController.processSignup = async (req: AdminRequest, res: Response) => {
    try {
        console.log("processSignup");
        
        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.SHOWROOM;

        const result = await memberService.processSignup(newMember);

        req.session.member = result;
        req.session.save(function(){
            res.send(result);
        });

    } catch (error) {
        console.log("Error, processSignup:", error);
        res.send(error);
    }
};

showroomController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");

        res.render("login");
    } catch (error) {
        console.log("Error, getLogin:", error);
    }
};

showroomController.processLogin = async (req: AdminRequest, res: Response) => {
    try {
        console.log("processLogin");

        const input: LoginInput = req.body;
        const result = await memberService.porcessLogin(input);

        req.session.member = result;
        req.session.save(function(){
            res.send(result);
        });
    } catch (error) {
        console.log("Error, processLogin:", error);
        res.send(error);
    }
};


export default showroomController;