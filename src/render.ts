import Plugin = require('markdown-it-regexp');
import { StackFa } from './stack-fa';
import { parse } from './parse';

export function render(str: string, sort?: boolean): string {
  return parse(str).render(sort);
}

export function toMarkdown(stack: StackFa): string {
  return `:fa-${stack.text()}:`;
}

export const markdownItPlugin: any = Plugin(/\:fa-([\w\-]+)\:/, match => render(match[1]));