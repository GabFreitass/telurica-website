import Root from 'components/Root/Root';
import LandingPage from 'pages/LandingPage/LandingPage';
import { Route } from 'react-router';
import { Routes, Navigate } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route path="home" element={<Root page={<LandingPage />} />} />
      <Route path="*" element={<Navigate to="home" />} />
    </Routes>
  );
}
