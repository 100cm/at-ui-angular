import { UploadModule } from './upload.module';

describe('UploadModule', () => {
  let uploadModule: UploadModule;

  beforeEach(() => {
    uploadModule = new UploadModule();
  });

  it('should create an instance', () => {
    expect(uploadModule).toBeTruthy();
  });
});
