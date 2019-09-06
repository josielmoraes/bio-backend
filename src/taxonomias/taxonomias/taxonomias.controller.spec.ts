import { Test, TestingModule } from '@nestjs/testing';
import { TaxonomiasController } from './taxonomias.controller';

describe('Taxonomias Controller', () => {
  let controller: TaxonomiasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaxonomiasController],
    }).compile();

    controller = module.get<TaxonomiasController>(TaxonomiasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
