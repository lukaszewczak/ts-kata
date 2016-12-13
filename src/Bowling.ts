export class Bowling {
    private throws: Array<number> = [];

    public addThrow(pins: number): void {
        this.throws.push(pins);
    }

    public getScore(): number {
        let score: number = 0;
        for (let frameIndex = 0, throwIndex = 0; frameIndex < 10; ++frameIndex, throwIndex += 2) {
            score += this.throws[throwIndex];
            score += this.throws[throwIndex + 1];

            if (this.isSpare(throwIndex) || this.isStrike(throwIndex)) {
                score += this.throws[throwIndex + 2];
            }

            if (this.isStrike(throwIndex)) {
                throwIndex--;
            }
        }
        return score;
    }

    private isSpare(throwIndex: number): boolean {
        return this.throws[throwIndex] + this.throws[throwIndex + 1] === 10;
    }

    private isStrike(throwIndex: number): boolean {
        return this.throws[throwIndex] === 10;
    }
}