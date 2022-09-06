import {io , Socket} from "socket.io-client"
import store from '../Redux/Store';
import { addProjectAction } from './../Redux/ProjectsState';
import { deleteProjectAction } from '../Redux/ProjectsState';


class SocketServices {

    private socket : Socket;

    public connect():void{
        this.socket = io("http://localhost:3001");
        this.listen();
    }


    private listen():void{

        this.socket.on("added-project", (project) => {
            store.dispatch(addProjectAction(project));
        });

        this.socket.on("deleted-project", (id) => {
            store.dispatch(deleteProjectAction(id));
        });

    }

    public disconnect():void{
        this.socket.disconnect();
    }
}

const socketServices = new SocketServices();
export default socketServices;