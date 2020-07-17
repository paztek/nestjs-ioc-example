import { Module } from '@nestjs/common';

import { SpiritDrinkProvider } from './spirit.drink.provider';

@Module({
    providers: [
        SpiritDrinkProvider,
    ],
})
export class SpiritModule {}
