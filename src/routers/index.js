//Layouts
import { HeaderOnly } from '~/components/Layout';

import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Upload from '~/Pages/Upload';

const publicRouters = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, Layout: HeaderOnly },
];
const privateRouters = [];

export { privateRouters, publicRouters };
