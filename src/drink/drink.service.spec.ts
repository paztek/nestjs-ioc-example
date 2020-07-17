import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { DrinkModule } from './drink.module';
import { SpiritModule } from './spirit/spirit.module';
import { BeerModule } from './beer/beer.module';
import { DrinkService } from './drink.service';

describe('DrinkService', () => {
    let app: INestApplication;
    let drinkService: DrinkService;

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [
                DrinkModule,
                SpiritModule,
                BeerModule,
            ],
        }).compile();

        app = moduleRef.createNestApplication();
        await app.init();

        drinkService = moduleRef.get(DrinkService);
    });

    it('returns the full list of drinks', async () => {
        const drinks = await drinkService.getDrinks();

        expect(drinks).toHaveLength(7);
    });
});
