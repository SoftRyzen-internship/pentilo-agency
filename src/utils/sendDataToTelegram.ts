import axios from 'axios';
import { FieldValues } from 'react-hook-form';

import { StatusVariants } from '@/components/Form/types';
import data from '@/data/telegramBot.json';

type Response = {
  data: { status: 200 | 500 };
};

export const sendDataToTelegram = async (
  formData: FieldValues,
): Promise<StatusVariants> => {
  const { userName, socialLink, phoneNumber, question } = formData;
  const { title, name, phone, socials, userQuestion } = data;

  const messageMarkup = `<b>${title}</b>\n
  ${name}${userName}
  ${socials}${socialLink}
  ${phone}${phoneNumber}
  ${userQuestion}${question}`;

  try {
    const response: Response = await axios.post(`/api/telegram`, {
      text: messageMarkup,
    });

    if (response.data.status === 200) return 'success';
  } catch (error) {
    return 'error';
  }

  return 'error';
};
