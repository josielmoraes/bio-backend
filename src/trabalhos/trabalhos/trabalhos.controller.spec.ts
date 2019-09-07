import { Test, TestingModule } from '@nestjs/testing';
import { TrabalhosController } from './trabalhos.controller';

describe('Trabalhos Controller', () => {
  let controller: TrabalhosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrabalhosController],
    }).compile();

    controller = module.get<TrabalhosController>(TrabalhosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
