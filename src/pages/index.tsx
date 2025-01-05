import { routes } from '@/shared/routing'
import { Route } from 'atomic-router-react'
import { Error404Page } from './error404'
import { HomePage, homeRoute } from './home'

export const Pages = () => (
  <>
    <Route route={routes.notFound} view={Error404Page} />
    <Route route={homeRoute} view={HomePage} />
  </>
)
