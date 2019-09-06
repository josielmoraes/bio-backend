import { Test, TestingModule } from '@nestjs/testing';
import { LocalidadesController } from './localidades.controller';

describe('Localidades Controller', () => {
  let controller: LocalidadesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocalidadesController],
    }).compile();

    controller = module.get<LocalidadesController>(LocalidadesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
