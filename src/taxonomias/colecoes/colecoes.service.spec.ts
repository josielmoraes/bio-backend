import { Test, TestingModule } from '@nestjs/testing';
import { ColecoesService } from './colecoes.service';

describe('ColecoesService', () => {
  let service: ColecoesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColecoesService],
    }).compile();

    service = module.get<ColecoesService>(ColecoesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
