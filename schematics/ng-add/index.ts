import {chain, noop, Rule, SchematicsException, SchematicContext, Tree} from '@angular-devkit/schematics';
import {NodePackageInstallTask} from '@angular-devkit/schematics/tasks';
import * as ts from 'typescript';
import {addModuleImportToRootModule, getSourceFile} from '../utils/ast';
import {
  addSymbolToNgModuleMetadata,
  findNodes,
  getDecoratorMetadata,
  insertAfterLastOccurrence
} from '../utils/devkit-utils/ast-utils';
import {Change, InsertChange, ReplaceChange} from '../utils/devkit-utils/change';
import {getProjectFromWorkspace, getWorkspace, Project, Workspace} from '../utils/devkit-utils/config';
import {getAppModulePath} from '../utils/devkit-utils/ng-ast-utils';
import {insertImport} from '../utils/devkit-utils/route-utils';
import {atVersion} from '../utils/lib-versions';
import {addPackageToPackageJson} from '../utils/package';
import {getProjectTargetOptions} from '../utils/project-targets';
import {Schema} from './schema';

const ADD_CONFIG = {
  COMPILED_THEME_PATH: 'node_modules/at-ng/assets/at-ng.css',
  BOOT_PAGE_PATH: 'src/app/app.component.html',
  BOOT_PAGE_HTML: `<!-- At Ui For Angular -->
<a  target="_blank" style="display: flex;align-items: center;justify-content: center;height: 100%;width: 100%;">
  <img height="300" src="https://img.alicdn.com/tfs/TB1NvvIwTtYBeNjy1XdXXXXyVXa-89-131.svg">
</a>`
};

export default function (options: Schema): Rule {
  return chain([
    options && options.skipPackageJson ? noop() : addAtToPackageJson(),
    setBootstrapPage(),
    addThemeToAppStyles(options),
    addModulesToAppModule(options),
    installNodeDeps()
  ]);
}


/** 添加 at-ng 到 package.json 的 dependencies */
function addAtToPackageJson(): (host: Tree) => Tree {
  return (host: Tree) => {
    addPackageToPackageJson(host, 'dependencies', 'at-ng', atVersion);
    return host;
  };
}

/** 添加 BrowserAnimationsModule FormsModule HttpClientModule AtModule 到 app.module */
function addModulesToAppModule(options: Schema): (host: Tree) => Tree {
  return (host: Tree) => {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(workspace, options.project);

    addModuleImportToRootModule(host, 'BrowserAnimationsModule', '@angular/platform-browser/animations', project);
    addModuleImportToRootModule(host, 'FormsModule', '@angular/forms', project);
    addModuleImportToRootModule(host, 'HttpClientModule', '@angular/common/http', project);
    addModuleImportToRootModule(host, 'AtModule', 'at-ng', project);

    return host;
  };
}

/** 添加样式配置 */
export function addThemeToAppStyles(options: Schema): (host: Tree) => Tree {
  return function (host: Tree): Tree {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(workspace, options.project);
    insertCompiledTheme(project, host, workspace);
    return host;
  };
}

/** 设置引导页面到 app.component.ts */
function setBootstrapPage(): (host: Tree) => Tree {
  return (host: Tree) => {
    host.overwrite(ADD_CONFIG.BOOT_PAGE_PATH, ADD_CONFIG.BOOT_PAGE_HTML);
    return host;
  };

}

/** 安装依赖 */
function installNodeDeps(): (host: Tree, context: SchematicContext) => void {
  return (host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
  };
}

/** 将编译的 css 添加到 angular.json */
function insertCompiledTheme(project: Project, host: Tree, workspace: Workspace): void {
  const themePath = ADD_CONFIG.COMPILED_THEME_PATH;

  // tslint:disable-next-line:no-any
  if ((project as any).targets || project.architect) {
    addStyleToTarget('build', host, workspace, project, themePath);
    addStyleToTarget('test', host, workspace, project, themePath);
  } else {
    throw new SchematicsException(`${project.name} does not have an architect or targets configuration`);
  }
}

/** Adds a style entry to the given target. */
function addStyleToTarget(targetName: string, host: Tree, workspace: Workspace, project: Project, asset: string, exclude: string = ''): void {
  const styleEntry = asset;
  const targetOptions = getProjectTargetOptions(project, targetName);
  // We can't assume that any of these properties are defined, so safely add them as we go
  // if necessary.
  if (!targetOptions.styles) {
    targetOptions.styles = [styleEntry];
  } else {
    const existingStyles = targetOptions.styles.map(s => typeof s === 'string' ? s : s.input);
    const hasGivenTheme = existingStyles.find(s => s.includes(asset));

    if (exclude) {
      const removeIndex = targetOptions.styles.indexOf(exclude);
      if (removeIndex >= 0) {
        targetOptions.styles.splice(removeIndex, 1);
      }
    }

    if (!hasGivenTheme) {
      targetOptions.styles.splice(0, 0, styleEntry);
    }
  }

  host.overwrite('angular.json', JSON.stringify(workspace, null, 2));
}
