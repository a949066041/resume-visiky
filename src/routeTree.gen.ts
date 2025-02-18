/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PageImport } from './routes/$page'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const PageRoute = PageImport.update({
  id: '/$page',
  path: '/$page',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/$page': {
      id: '/$page'
      path: '/$page'
      fullPath: '/$page'
      preLoaderRoute: typeof PageImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/$page': typeof PageRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/$page': typeof PageRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/$page': typeof PageRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/$page'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/$page'
  id: '__root__' | '/' | '/$page'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  PageRoute: typeof PageRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PageRoute: PageRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/$page"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/$page": {
      "filePath": "$page.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
