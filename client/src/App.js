import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import React from 'react';
import TaskList from './pages/TaskList.js';
import LandCheck from './pages/LandCheck/LandCheck';
import Task from './pages/Task';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<LandCheck />} />
                    <Route path='/tasklist' element={<TaskList />} />
                    <Route path='/tasklist/task/:id' element={<Task />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
