import dayjs from 'dayjs';

type MessageType = {
  id: number;
  storeId: number;
  employeeId?: number;
  messageText: string;
  createdAt: dayjs.Dayjs;
  updateAt: dayjs.Dayjs;
};

export default MessageType;
