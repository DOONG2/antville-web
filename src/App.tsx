import { Helmet } from 'react-helmet-async'
import useCheckUserEffect from './components/common/hooks/useCheckUserEffect'
import { Route, Switch } from 'react-router-dom'
import FeedPage from './pages/feed/FeedPage'
import UserProfilePage from './pages/user/UserProfilePage'
import UserEditPage from './pages/user/UserEditPage'
import StockPage from './pages/stock/StockPage'
import Core from './lib/base/Core'
import HomePage from './pages/home/HomePage'
import AuthRoute from './lib/routes/AuthRoute'
import LandingPage from './pages/landing/LandingPage'
import NotFoundPage from './pages/NotFoundPage'
import ErrorBoundary from './components/error/ErrorBoundary'
import NoticePage from './pages/notice/NoticePage'
import { useRootState } from './components/common/hooks/useRootState'

function App() {
  const user = useRootState((state) => state.user)
  useCheckUserEffect()
  return (
    <>
      <Helmet>
        <title>앤트빌</title>
        <meta
          name="description"
          content="1000만 투자자들을 위한 투자정보공유마을. 고민하지 말고 앤트빌에서 시작하세요."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <ErrorBoundary>
        <Switch>
          <AuthRoute
            path={['/', '/:mode(all|watchlist|following)']}
            authenticated={user !== null}
            component={HomePage}
            redirect={LandingPage}
            exact
          />
          <AuthRoute
            path="/notice"
            authenticated={user !== null}
            component={NoticePage}
            redirect={LandingPage}
            exact
          />
          <Route path="/feed/detail/:id" component={FeedPage} exact />
          <Route
            path={[
              '/user/:nickname/profile',
              '/user/:nickname/profile/:mode(all|like)',
            ]}
            component={UserProfilePage}
            exact
          />
          <Route path="/user/edit" component={UserEditPage} exact />
          <Route path="/stock/:ticker" component={StockPage} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </ErrorBoundary>
      <Core />
    </>
  )
}

export default App
