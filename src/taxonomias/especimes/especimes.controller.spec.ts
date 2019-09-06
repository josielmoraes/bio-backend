import { Test, TestingModule } from '@nestjs/testing';
import { EspecimesController } from './especimes.controller';

describe('Especimes Controller', () => {
  let controller: EspecimesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EspecimesController],
    }).compile();

    controller = module.get<EspecimesController>(EspecimesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
