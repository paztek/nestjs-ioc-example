import { Injectable } from '@nestjs/common';

import { DrinkProvider, DrinkProviderDecorator } from '../drink.provider';
import { Drink } from '../drink.model';

@Injectable()
@DrinkProviderDecorator()
export class BeerDrinkProvider implements DrinkProvider {

    public getDrinks(): Promise<Drink[]> {
        return Promise.resolve([
            {
                name: 'Amber Ale',
                alcoholByVolume: 5,
            },
            {
                name: 'Blonde Ale',
                alcoholByVolume: 5,
            },
            {
                name: 'Pilsner',
                alcoholByVolume: 4,
            },
            {
                name: 'IPA',
                alcoholByVolume: 6,
            },
        ]);
    }
}
