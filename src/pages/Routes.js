import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import AddTodo from './AddTodo';
import MyTodo from './MyTodo';
import Header from '../component/Header';
import Footer from '../component/Footer';

export default function Index() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        <Route path='/' element={<AddTodo />} />
                        <Route path='addtodo' element={<Home />} />
                        <Route path='mytodo' element={<MyTodo />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </>
    )
}
