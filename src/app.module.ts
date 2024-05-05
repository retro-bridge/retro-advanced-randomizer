import { Module } from '@nestjs/common';
import { RetroBridgeRandomizeService } from './retro-bridge-randomize/retro-bridge-randomize.service';
import { RetroBridgeRandomizeController } from './retro-bridge-randomize/retro-bridge-randomize.controller';

@Module({
  imports: [],
  controllers: [RetroBridgeRandomizeController],
  providers: [RetroBridgeRandomizeService],
})
export class AppModule {}
