import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from "./style/GlobalStyle"
import ResetStyle from './style/ResetStyle'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HistoryPage from './pages/HistoryPage/HistoryPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import RoutinePage from './pages/RoutinePage/RoutinePage'
import TodayPage from './pages/TodayPage/TodayPage'
import { GlobalContextProvider } from './context/GlobalContext';

//Confiuguração de rotas e prover para a aplicação
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LoginPage /> },
      { path: "/cadastro", element: <RegisterPage /> },
      { path: "/habitos", element: <RoutinePage /> },
      { path: "/hoje", element: <TodayPage /> },
      { path: "/historico", element: <HistoryPage /> },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ResetStyle />
    <GlobalStyle />

    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  </>
);