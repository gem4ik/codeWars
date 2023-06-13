function encrypt(text, n) {
    if (typeof text !== 'string') {
        return null;
    }

    if (n <= 0) {
        return text;
    }

    const chet = [...text].filter((_, i) => i % 2 === 1).join('');
    const nechet = [...text].filter((_, i) => i % 2 === 0).join('');

    return encrypt(chet + nechet, n - 1);
}

function decrypt(encryptedText, n) {
    if (typeof encryptedText !== 'string') {
        return null;
    }

    if (n <= 0) {
        return encryptedText;
    }

    const length = encryptedText.length;
    const halfLength = Math.floor(length / 2);

    const chet = encryptedText.slice(0, halfLength);
    const nechet = encryptedText.slice(halfLength);

    let decryptedText = '';

    for (let i = 0; i < halfLength; i++) {
        decryptedText += nechet[i] + chet[i];
    }

    if (length % 2 === 1) {
        decryptedText += nechet[halfLength];
    }

    return decrypt(decryptedText, n - 1);
}