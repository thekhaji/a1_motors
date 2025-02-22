import {Request, Response} from "express";
import { T } from "../libs/types/common";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import MemberService from "../models/Member.service";
import Errors from "../libs/Errors";

const memberController: T = {};
const memberService = new MemberService();
// REACT

memberController.signup = async (req: Request, res: Response) => {
    try {
        console.log("signup");
        
        const newMember: MemberInput = req.body;

        const result: Member = await memberService.signup(newMember);

        res.json({member: result});
    } catch (error) {
        console.log("Error, signup:", error);
        if (error instanceof Errors) res.status(error.code).json(error);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

memberController.login = async (req: Request, res: Response) => {
    try {
        console.log("login");
        
        const input: LoginInput = req.body;
        const result = await memberService.login(input);

        res.json({member: result});
    } catch (error) {
        console.log("Error, login:", error);
        if (error instanceof Errors) res.status(error.code).json(error);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};


export default memberController;