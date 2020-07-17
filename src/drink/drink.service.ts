import { Injectable } from '@nestjs/common';

import { Drink } from './drink.model';
import { DrinkProvider } from './drink.provider';

@Injectable()
export class DrinkService {

    private readonly providers: DrinkProvider[] = [];

    registerProvider(provider: DrinkProvider): void {
        this.providers.push(provider);
    }

    async getDrinks(): Promise<Drink[]> {
        const drinks: Drink[] = [];

        for (const provider of this.providers) {
            drinks.push(...await provider.getDrinks());
        }

        return drinks;
    }
}
