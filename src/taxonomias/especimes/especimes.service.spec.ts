import { Test, TestingModule } from '@nestjs/testing';
import { EspecimesService } from './especimes.service';

describe('EspecimesService', () => {
  let service: EspecimesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EspecimesService],
    }).compile();

    service = module.get<EspecimesService>(EspecimesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
