import { lazy } from 'react';

const DetailPemain = lazy(() =>
    import ('../components/DetailPemain/DetailPemain'));

const routes = [{
    path: '/detailpemain',
    component: <DetailPemain /> ,
    exact: false,
}]

export default routes;