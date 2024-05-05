import { Body, Controller, Post } from '@nestjs/common';
import { RetroBridgeRandomizeService } from 'src/retro-bridge-randomize/retro-bridge-randomize.service';

@Controller('retro-bridge-randomize')
export class RetroBridgeRandomizeController {
    constructor(private readonly retroBridgePrizePoolService: RetroBridgeRandomizeService) {}

    /**
     * Endpoint to receive an array of EVM addresses and return a random subset of 333 addresses.
     * @param body Contains an array of EVM addresses.
     * @returns Array of 333 randomly selected EVM addresses.
     */
    @Post('get-prize-pool-winners')
    getPrizePoolWinners(@Body() body: { addresses: string[] }): string[] {
      return this.retroBridgePrizePoolService.getPrizePoolWinners(body.addresses);
    }
}
