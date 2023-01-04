import { getDirname, path } from '@vuepress/utils';

// @ts-expect-error FIXME: typescript is being weird here.
const __dirname = getDirname(import.meta.url);

export function handleRootAlias(p: string) {
  return p.replace(/^@root/, path.resolve(__dirname, '../../..'));
}
