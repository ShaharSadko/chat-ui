import socketOperations from '../socketOperations';

const socketUrl = 'testUrl';
const dispatch = () => {
    return 'im a dispatch action'
};
const ioMock = {
    emit(eventName, payload) {
    }, on(eventName, callback) {
    }
};
let operations;
11
beforeEach(() => {
    operations = new socketOperations(ioMock, dispatch)
});

describe('src/sockets/socketOperations', () => {
    it('should set dispatch ,socket and call io.on twice for connect and disconnect ', () => {
        const spy = jest.spyOn(ioMock, 'on');
        operations = new socketOperations(ioMock, dispatch)
        expect(operations.dispatch).toEqual(dispatch);
        expect(operations.socket).toEqual(ioMock);
        expect(spy).toHaveBeenCalledTimes(2);

    });
    it('should add listener', () => {
        const spy = jest.spyOn(ioMock, 'on');
        const callback = (message) => {
            return 'action'
        };
        operations.addChannelListener('eventName', callback);

        expect(spy).toHaveBeenCalledWith('eventName', expect.anything());
    });

    it('should emit event', () => {
        const spy = jest.spyOn(ioMock, 'emit');
        const eventName = 'eventName';
        const payload = 'payload';

        operations.emitEvent(eventName, payload);

        expect(spy).toHaveBeenCalledWith(eventName, payload)
    });
});