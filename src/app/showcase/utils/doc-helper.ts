export class DocHelper {

  public docRequire(path: string) {
    return require('!!raw-loader!' + path);
  }

}
