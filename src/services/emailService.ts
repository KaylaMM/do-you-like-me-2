import { decodeText } from '@utils';

interface EmailServiceProps {
  responderName: string;
  senderEmail: string;
  senderName: string;
  senderMessage: string;
  selectedAnswer: string;
}

const emailService = async ({
  responderName,
  senderEmail,
  senderName,
  senderMessage,
  selectedAnswer,
}: EmailServiceProps) => {
  return new Promise(async (resolve, reject) => {
    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        to: decodeText(senderEmail),
        response: selectedAnswer,
        responder: responderName,
        senderName,
        senderMessage,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const response = await res.json();

    if (response.error) {
      console.error(response.error);
      reject(new Error('API error'));
    } else {
      resolve(response);
    }
  });
};

export default emailService;
