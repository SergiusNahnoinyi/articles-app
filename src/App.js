import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Container from './components/Container';
import AppBar from './components/AppBar';

const HomePage = lazy(() => import('./pages/HomePage'));
const ArticlesPage = lazy(() => import('./pages/ArticlesPage'));
const EditorPage = lazy(() => import('./pages/EditorPage'));

export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <AppBar />
        <Suspense fallback="Loading...">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/edit" element={<EditorPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Container>
  );
}
