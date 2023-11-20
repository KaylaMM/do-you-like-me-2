const encodeText = (text?: string) => {
  if (!text) return ''

  const encodedText = Buffer.from(text).toString('base64');
  return encodeURIComponent(encodedText);
};

export default encodeText;
