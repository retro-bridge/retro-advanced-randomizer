import { Injectable } from '@nestjs/common';

@Injectable()
export class RetroBridgeRandomizeService {
    // Constant for the number of prize winners
    private readonly NUM_WINNERS: number = 333;

    /**
   * Takes an array of EVM addresses and returns a random subset of 333 addresses designated as prize winners.
   * @param addresses Array of EVM addresses.
   * @returns Array of 333 randomly selected EVM addresses as prize winners.
   */
    getPrizePoolWinners(addresses: string[]): string[] {
        // Shuffle the array using Durstenfeld shuffle algorithm
        for (let i = addresses.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [addresses[i], addresses[j]] = [addresses[j], addresses[i]];
        }
        // Return the first 333 addresses from the shuffled array
        return addresses.slice(0, this.NUM_WINNERS);
    }
}
