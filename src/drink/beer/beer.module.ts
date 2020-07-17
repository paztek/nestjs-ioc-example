import { Module } from '@nestjs/common';

import { BeerDrinkProvider } from './beer.drink.provider';

@Module({
    providers: [
        BeerDrinkProvider,
    ],
})
export class BeerModule {}
