import {settings} from './settings.js';
import * as assert from 'assert';

const {getDefaultGameSettings, getGameSettings, saveGameSettings,  updateGameSettings} = settings;

describe('getGameSettings', () => {
    it('should return an object containing the game settings', function () {
        // setup
        const expectedObject = getDefaultGameSettings();

        // exercise
        const result = getGameSettings();

        // verify
        assert.strictEqual(result, expectedObject);
    });
});
