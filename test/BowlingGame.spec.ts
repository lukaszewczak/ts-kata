import 'mocha';
import {expect} from 'chai';
import {Game} from "../src/Game";

describe('Bowling Game', () => {
    let g: Game;

    beforeEach(() => {
        g = new Game();
    });

    let rollMany = (times: number, pins: number): void => {
        for (let i = 0; i < times; i++) {
            g.roll(pins);
        }
    };

    let rollSpare = () => {
        g.roll(5);
        g.roll(5);
    };

    let rollStrike = () => {
        g.roll(10);
    };

    it('test gutter game', () => {
        rollMany(20, 0);
        expect(g.getScore()).to.equal(0);
    });

    it('test all ones', () => {
        rollMany(20, 1);
        expect(g.getScore()).to.equal(20);
    });

    it('test one spare', () => {
        rollSpare();
        g.roll(3);
        rollMany(17, 0);
        expect(g.getScore()).to.equal(16);
    });

    it('test one strike', () => {
        rollStrike();
        g.roll(3);
        g.roll(4);
        rollMany(16, 0);
        expect(g.getScore()).to.equal(24);
    });

    it('test perfect game', () => {
        rollMany(12, 10);
        expect(g.getScore()).to.equal(300);
    });

});