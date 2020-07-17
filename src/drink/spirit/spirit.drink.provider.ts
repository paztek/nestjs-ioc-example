import { Injectable } from '@nestjs/common';

import { DrinkProvider, DrinkProviderDecorator } from '../drink.provider';
import { Drink } from '../drink.model';

@Injectable()
@DrinkProviderDecorator()
export class SpiritDrinkProvider implements DrinkProvider {

    public getDrinks(): Promise<Drink[]> {
        return Promise.resolve([
            {
                name: 'Rum',
                alcoholByVolume: 45,
            },
            {
                name: 'Arrack',
                alcoholByVolume: 50,
            },
            {
                name: 'Cognac',
                alcoholByVolume: 40,
            },
        ]);
    }
}
