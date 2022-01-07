import React from 'react';
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Preloader from "../../widgets/preloader";

export const withRouter = (component: () => React.ReactNode) => () => (
    <BrowserRouter>
        <Suspense fallback={<Preloader />}>
            {component()}
        </Suspense>
    </BrowserRouter>
);