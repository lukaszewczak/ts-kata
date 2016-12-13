import 'mocha';
import {expect} from 'chai';
import {Bowling} from '../src/Bowling';

describe('Bowling', () => {
    let bowling: Bowling;

    beforeEach(() => {
        bowling = new Bowling();
    });

    let addThrows = (pins: number, times: number) => {
        for (let i = 0; i < times; i++) {
            bowling.addThrow(pins);
        }
    };

    it('all gutters', () => {
        addThrows(0, 20);
        expect(bowling.getScore()).to.equal(0);
    });

    it('all threes', () => {
        addThrows(3, 20);
        expect(bowling.getScore()).to.equal(20 * 3);
    });

    it('spare and all gutters', () => {
        addThrows(5, 2);
        addThrows(0, 18);
        expect(bowling.getScore()).to.equal(10);
    });

    it('spare and all threes', () => {
        addThrows(5, 2);
        addThrows(3, 18);
        expect(bowling.getScore()).to.equal(10 + 3 + 18 * 3);
    });

    it('strike and all gutters', () => {
        addThrows(10, 1);
        addThrows(0, 18);
        expect(bowling.getScore()).to.equal(10);
    });

    it('strike and all threes', () => {
        addThrows(10, 1);
        addThrows(3, 18);
        expect(bowling.getScore()).to.equal(10 + 3 + 3 + 18 * 3);
    });

    it('a perfect game', () => {
        addThrows(10, 12);
        expect(bowling.getScore()).to.equal(300);
    });
});