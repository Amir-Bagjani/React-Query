import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import { HomePage } from './components/Home.page'
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page'
import { SuperHeroesPage } from './components/SuperHeroes.page'
import SuperHeroDetail from './components/SuperHeroDetail.page'
import ParallelQueries from './components/ParallelQueries'
import DynamicParallrQueries from './components/DynamicParallrQueries'
import DepQueryPage from './components/DepQueryPage'
import PaginatedQueriesPage from './components/PaginatedQueriesPage'
import InfiniteQuerisPage from './components/InfiniteQuerisPage'

import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

function AppWrapper() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-parallel'>Parallel Queries</Link>
            </li>
            <li>
              <Link to='/rq-dynamic-parallel'>Dynamic Parallel Queries</Link>
            </li>
            <li>
              <Link to='/rq-dependent'>dependent</Link>
            </li>
            <li>
              <Link to='/rq-paginate'>paginate</Link>
            </li>
            <li>
              <Link to='/rq-infinite'>infinite</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/rq-paginate'>
            <PaginatedQueriesPage />
          </Route>
          <Route path='/rq-infinite'>
            <InfiniteQuerisPage />
          </Route>
          <Route path='/rq-dependent'>
            <DepQueryPage email="amir@gmail.com" />
          </Route>
          <Route path='/rq-dynamic-parallel'>
            <DynamicParallrQueries ids={[1, 3]} />
          </Route>
          <Route path='/rq-parallel'>
            <ParallelQueries />
          </Route>
          <Route path='/rq-super-heroes/:id'>
            <SuperHeroDetail />
          </Route>
          <Route path='/super-heroes'>
            <SuperHeroesPage />
          </Route>
          <Route path='/rq-super-heroes'>
            <RQSuperHeroesPage />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function App(){
  return(
    <QueryClientProvider client={queryClient}>
      <AppWrapper />
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  )
}

export default App
