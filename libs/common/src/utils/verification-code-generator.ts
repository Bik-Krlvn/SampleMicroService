interface VerificationOptions {
  type: string | number;
}

export const generateVerificationCode = (
  length: number,
  options: VerificationOptions,
): string | number => {
  if (isNaN(length)) throw new TypeError('Length must be a number');
  if (length < 1) throw new Error('Length must be at least 1');

  const possible = '0123456789';
  let code = '';
  for (let i = 0; i < length; i++) {
    code += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  if (options) {
    if (options.type === 'number') return parseFloat(code);
  }
  return code;
};
