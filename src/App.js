import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import React from 'react';
import Task from './pages/Task.js';
import Addtask from './pages/Addtask.js';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Task />} />
                    <Route path='/started' element={<Task />} />
                    <Route path='/calendar' element={<Task />} />
                    <Route path='/user' element={<Task />} />
                    <Route path='/order' element={<Task />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
