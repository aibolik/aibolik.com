import unifiedTypes from 'unified';
import { Node } from 'unist';
import visit, { Visitor } from 'unist-util-visit';
import u from 'unist-builder';

interface NodeWithProps extends Node {
  properties?: any;
  tagName?: string;
}

const attacher: unifiedTypes.Plugin = () => {

  return (tree) => {

    const visitor: Visitor<NodeWithProps> = (node, index, parent: any) => {
      if (!parent || parent.tagName !== 'pre' || node.tagName !== 'code') {
        return;
      }

      const className = node?.properties?.className?.[0] ?? '';

      if (className && className.startsWith('language-')) {
        const lang = className.slice(9);
        parent.properties['data-lang'] = lang;
        parent.children.push(
          u(
            'element', 
            {
              tagName: 'div',
              properties: { className: 'code-lang' },
            },
            [u('text', lang)]
          )
        );
      }
    }

    visit(tree, 'element', visitor);
  }
}

export default attacher;