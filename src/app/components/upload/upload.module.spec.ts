import { AtUploadModule } from './upload.module';

describe('UploadModule', () => {
  let uploadModule: AtUploadModule;

  beforeEach(() => {
    uploadModule = new AtUploadModule();
  });

  it('should create an instance', () => {
    expect(uploadModule).toBeTruthy();
  });
});
