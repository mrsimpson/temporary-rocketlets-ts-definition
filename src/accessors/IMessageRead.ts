/**
 * This accessor provides methods for accessing
 * messages in a read-only-fashion.
 */

import { IMessage } from '../messages/index';
import { IRoom } from '../rooms/IRoom';
import { IUser } from '../users/IUser';

export interface IMessageRead {
    getById(id: string): IMessage;

    getSenderUser(messageId: string): IUser;

    getRoom(messageId: string): IRoom;
}
