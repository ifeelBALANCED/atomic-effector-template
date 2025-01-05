import { appStarted } from '@/shared/config'
import { createHistoryRouter, createRoute } from 'atomic-router'
import { sample } from 'effector'
import { createBrowserHistory } from 'history'

export const routes = {
  home: createRoute(),
  notFound: createRoute(),
}

export const routesMap = [
  { path: '/', route: routes.home },
]

export const notFoundRoute = routes.notFound
export const router = createHistoryRouter({
  routes: routesMap,
  notFoundRoute,
})

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: router.setHistory,
})
