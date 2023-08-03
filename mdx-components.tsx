import type { MDXComponents } from 'mdx/types'
import CodeHighligher from '@/components/CodeHighligher'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    pre: ({ children }) => {
      const { className, children: code } = (
        children?.valueOf() as Record<string, unknown>
      ).props as { className: string; children: string }
      return <CodeHighligher lang={className} code={code} />
    },
    ...components
  }
}
