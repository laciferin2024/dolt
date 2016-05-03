// @flow

import Chunk from './chunk.js';
import Ref from './ref.js';
import {assert} from 'chai';
import {ensureRef, getRef} from './get-ref.js';
import {Kind} from './noms-kind.js';
import {suite, test} from 'mocha';

suite('get ref', () => {
  test('getRef', () => {
    const input = `t [${Kind.Bool},false]`;
    const ref = Chunk.fromString(input).ref;
    const actual = getRef(false);

    assert.strictEqual(ref.toString(), actual.toString());
  });

  test('ensureRef', () => {
    let r: ?Ref = null;
    r = ensureRef(r, false);
    assert.isNotNull(r);
    assert.strictEqual(r, ensureRef(r, false));
  });
});
