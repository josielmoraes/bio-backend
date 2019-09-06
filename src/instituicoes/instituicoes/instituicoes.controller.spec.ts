import { Test, TestingModule } from '@nestjs/testing';
import { InstituicoesController } from './instituicoes.controller';

describe('Instituicoes Controller', () => {
  let controller: InstituicoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstituicoesController],
    }).compile();

    controller = module.get<InstituicoesController>(InstituicoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
