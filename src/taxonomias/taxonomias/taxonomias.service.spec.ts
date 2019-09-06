import { Test, TestingModule } from '@nestjs/testing';
import { TaxonomiasService } from './taxonomias.service';

describe('TaxonomiasService', () => {
  let service: TaxonomiasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaxonomiasService],
    }).compile();

    service = module.get<TaxonomiasService>(TaxonomiasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
