import { SetMetadata } from '@nestjs/common';

import { Drink } from './drink.model';

export const DRINK_PROVIDER = 'DrinkProvider';

export interface DrinkProvider {
    getDrinks(): Promise<Drink[]>;
}

export const DrinkProviderDecorator = () => SetMetadata(DRINK_PROVIDER, true);
