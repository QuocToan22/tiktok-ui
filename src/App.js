import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouters } from '~/routers';
import { DefaultLayout } from '~/components/Layout';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRouters.map((route, index) => {
                        const Pages = route.component;
                        let Layout = DefaultLayout;

                        if (route.Layout) {
                            Layout = route.Layout;
                        } else if (route.Layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Pages />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
