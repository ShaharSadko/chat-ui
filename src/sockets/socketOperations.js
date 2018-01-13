class socketOperations {
    constructor(socket, dispatch) {
        this.socket = socket;
        this.dispatch = dispatch;
        this.setUpConnection();
    }

    setUpConnection = () => {
        this.socket.on("connect", () => {
            console.log("connected to chat server!");
        });
        this.socket.on("disconnect", () => {
            console.log("disconnected from chat server!");
        })
    };

    addChannelListener = (eventName, callback) => {
        this.socket.on(eventName, message => {
            let action = callback(message);
            if (action)
                this.dispatch(action);
        });
    };

    emitEvent = (eventName, payload) => {
        this.socket.emit(eventName, payload)
    };
}

export default socketOperations;
