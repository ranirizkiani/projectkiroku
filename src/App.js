import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import React from 'react';
import Task from './pages/Task.js';
import Addtask from './pages/Addtask.js';
import LandCheck from './pages/LandCheck/LandCheck';
import Result from './pages/Result';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<LandCheck />} />
                    <Route path='/task' element={<Task />} />
                    <Route path='/task/result/:id' element={<Result />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
