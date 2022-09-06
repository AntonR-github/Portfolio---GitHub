import {Server as HttpServer} from "http"
import { Server as SocketServer, Socket } from "socket.io";
import ProjectModel from "../4-models/project-model";



let socketServer:SocketServer;

function init(httpServer:HttpServer):void{

    socketServer = new SocketServer(httpServer,{cors:{origin:"*"}});

    socketServer.sockets.on("connection", (socket:Socket) => {
        console.log("socket connected");
    });
    

}

function reportAddProject(project:ProjectModel):void{
    socketServer.sockets.emit("added-project", project);
}

function reportDeleteProject(id:number):void{
    socketServer.sockets.emit("deleted-project", id);
}

export default {
    init,
    reportAddProject,
    reportDeleteProject
};
