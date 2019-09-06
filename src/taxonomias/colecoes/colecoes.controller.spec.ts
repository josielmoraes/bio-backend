import { Test, TestingModule } from '@nestjs/testing';
import { ColecoesController } from './colecoes.controller';

describe('Colecoes Controller', () => {
  let controller: ColecoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColecoesController],
    }).compile();

    controller = module.get<ColecoesController>(ColecoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
