import { Module, OnModuleInit } from '@nestjs/common';

import { DrinkService } from './drink.service';
import { DiscoveryModule, DiscoveryService } from "@nestjs/core";
import { DRINK_PROVIDER, DrinkProvider } from "./drink.provider";

@Module({
    imports: [
        DiscoveryModule,
    ],
    providers: [
        DrinkService,
    ],
})
export class DrinkModule implements OnModuleInit {

    constructor(
        private readonly discovery: DiscoveryService,
        private readonly drinkService: DrinkService,
    ) {}

    onModuleInit(): any {
        const wrappers = this.discovery.getProviders();

        const drinkProviders = wrappers
            .filter((wrapper) => wrapper.metatype && Reflect.getMetadata(DRINK_PROVIDER, wrapper.metatype))
            .map((wrapper) => wrapper.instance) as DrinkProvider[];

        drinkProviders.forEach((provider) => this.drinkService.registerProvider(provider));
    }
}
