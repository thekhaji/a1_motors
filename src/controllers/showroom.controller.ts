import {Request, Response} from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { Message } from "../libs/Errors";

const showroomController: T = {};
const memberService = new MemberService();

showroomController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");
        
        res.render("home");
    } catch (error) {
        console.log("Error, goHome:", error);
        res.redirect('/admin');
    }
};

showroomController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");

        res.render("signup");
    } catch (error) {
        console.log("Error, getSignup:", error);
        res.redirect('/admin');
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
        const message = error instanceof Errors ? error.message : Message.SOMETHING_WENT_RONG;
        res.send(`<script>alert("${message}"); window.location.replace('admin/signup')</script>`)
    }
};

showroomController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");

        res.render("login");
    } catch (error) {
        console.log("Error, getLogin:", error);
        res.redirect('/admin');
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
        const message = error instanceof Errors ? error.message : Message.SOMETHING_WENT_RONG;
        res.send(`<script>alert("${message}"); window.location.replace('admin/login')</script>`);
    }
};

showroomController.logout = async (req: AdminRequest, res: Response) => {
    try {
        console.log("logout");

        req.session.destroy(function(){
            res.redirect("/admin");
        });

    } catch (error) {
        console.log("Error, logout:", error);
        res.redirect('/admin');
    }
};

showroomController.chechAuth = async (req: AdminRequest, res: Response) => {
    try {
        console.log("chechAuth");
        if (req.session?.member){
            res.send(`<script>alert("You are ${req.session?.member.memberNick}!")</script>`);
        }
        else{
            res.send(`<script>alert("${Message.NOT_AUTHENTICATED}")</script>`)
        }
        
    } catch (error) {
        console.log("Error, chechAuth:", error);
        res.send(error);
    }
}

export default showroomController;