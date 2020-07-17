import { Module } from '@nestjs/common';

import { SpiritModule } from './drink/spirit/spirit.module';
import { DrinkModule } from './drink/drink.module';
import { BeerModule } from './drink/beer/beer.module';

@Module({
    imports: [
        DrinkModule,
        SpiritModule,
        BeerModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
