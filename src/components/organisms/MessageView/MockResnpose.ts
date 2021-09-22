import dayjs from 'dayjs';

const mockResponse2Messages = {
  message: 'Success',
  data: [
    {
      id: 1,
      storeId: 1,
      employeeId: 1,
      messageText: 'ありがとう',
      updateAt: dayjs('2021/09/19'),
      createdAt: dayjs('2021/09/19'),
    },
    {
      id: 2,
      storeId: 1,
      employeeId: 1,
      messageText: 'Thank you!!',
      updateAt: dayjs('2021/09/19'),
      createdAt: dayjs('2021/09/19'),
    },
  ],
};

const mockResponseNoMessage = {
  message: 'No data',
};

export { mockResponse2Messages, mockResponseNoMessage };
