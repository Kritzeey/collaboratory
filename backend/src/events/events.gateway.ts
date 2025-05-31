import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway()
export class EventsGateway {
  @WebSocketServer()
  private server: Server;

  @SubscribeMessage("send")
  handleMessage(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket,
  ) {
    client.broadcast.emit("receive", data);
  }
}
