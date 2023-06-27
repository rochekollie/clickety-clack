import {styles} from './styles.js';
import * as assert from 'assert';

const {toggleElementStyle} = styles;

describe('toggleElementStyle', () => {
    it('should contain a given class name on a given HTML element', function () {
        // setup
        const inputElement = document.createElement('div');
        const expectedClassName = 'test-style';

        // exercise
        toggleElementStyle(inputElement, expectedClassName);
        const result = inputElement.classList.contains(expectedClassName);

        // verify
        assert.strictEqual(result, expectedClassName);
    });
});