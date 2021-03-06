const { tokenize, untokenize } = require('../../../lib/util/auth/tokenizer');

describe('tokenizer', () => {
    it('creates a token for a payload', () => {
        const token = tokenize({ name: 'Boo' });
        expect(token).toEqual(expect.any(String));
    });

    it('decodes a token with payload', () => {
        const token = tokenize({ name: 'Boo' });
        const decodedToken = untokenize(token);

        expect(decodedToken).toEqual({ name: 'Boo' });
    });
});
