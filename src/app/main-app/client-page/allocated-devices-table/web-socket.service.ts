import {Injectable} from "@angular/core";

const SockJs = require("sockjs-client");
const Stomp = require("stompjs");

@Injectable()
export class WebSocketService {

  public connect() {
    let socket = new SockJs('http://localhost:8080/socket');
    return Stomp.over(socket);
  }
}
