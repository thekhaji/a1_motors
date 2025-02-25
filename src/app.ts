import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDBSession from "connect-mongodb-session";
import { T } from "./libs/types/common";

const MongoDBStore = ConnectMongoDBSession(session);
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: "sessions"
});

/** 1-Enterance **/
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

/** 2-SESSIONS **/
app.use(
    session({
        secret: String(process.env.SESSION_SECRET),
        cookie: {
            maxAge: 1000*3600*6 // 6 hours
        },
        store: store,
        resave: true,
        saveUninitialized: true,
    })
);

app.use(function(req,res,next){
    // const sessionInstance = req.session as T;
    // res.locals.member = sessionInstance.member;
    res.locals.member = (req.session as T).member ; // req.session comes from "express-session" package andd by deault it does not include a member property
});

/** 3-VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4-ROUTERS **/
app.use("/admin", routerAdmin); // BSSR: EJS
app.use("/", router);           // SPA: REACT


export default app;