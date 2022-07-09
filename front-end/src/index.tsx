import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Outlet,
  Routes,
  Route,
} from "react-router-dom";

import { Arad } from './Arad';

import { Login } from './identification/Login';
import { Register } from './identification/Register';
import { Request as PassphraseResetRequest } from './identification/Passphrase/Reset/Request';
import { Confirm as PassphraseResetConfirm } from './identification/Passphrase/Reset/Confirm';
import { Change as PassphraseChange } from './identification/Passphrase/Change';

import { Search } from './core/Search';
import { Analytics } from './core/Analytics';

import { Article } from './administration/Article';
import { Articles } from './administration/Articles';
import { User } from './administration/User';
import { Users } from './administration/Users';

import reportWebVitals from './reportWebVitals';

import './index.css';

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Arad />}>
          <Route index element={<Search />} />

          {/* authentication */}
          <Route path="register" element={<Register />} /> 
          <Route path="login" element={<Login />} />
          <Route path="passphrase" element={<Outlet />}>
            <Route index element={<PassphraseChange />} />
            <Route path="reset" element={<Outlet />}>
              <Route index element={<PassphraseResetRequest />} />
              <Route path="confirm" element={<PassphraseResetConfirm />} />
            </Route>
          </Route>

          {/* core functionality */}
          <Route path="search" element={<Outlet />}>
            <Route index element={<Search />} />
            <Route path=":articleId" element={<Analytics />} />
          </Route>

          {/* admin */}
          <Route path="articles" element={<Outlet />}>
            <Route index element={<Articles />} />
            <Route path=":articleId" element={<Article />} />
          </Route>
          <Route path="users" element={<Outlet />}>
            <Route index element={<Users />} />
            <Route path=":userId" element={<User />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
