import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import Home from "./views/Home"
import Error from "./views/Error";
import NotFound from "./views/NotFound";
import ConnectAccount from "./views/ConnectAccount";

import DeployCTC from "./views/DeployCTC/DeployCTC"
import ContractDetail from "./views/DeployCTC/ContractDetail"

import Order from "./views/AttachContract/Orders";
import AcceptOrder from "./views/AttachContract/AcceptOrder";
import RejectOrder from "./views/AttachContract/RejectOrder";
import SellerTrack from "./views/AttachContract/SellerTrack"

import ViewAttach from "./views/ViewContract/ViewAttach";
import Viewer from "./views/ViewContract/Viewer";

import TestDeploy from "./views/test/TestDeploy";



export default function AppRoutes() {
    
    return <Routes>
        <Route path="/" element={<ConnectAccount />} />
        <Route path="error" element={<Error />} />
        <Route path="/home" element={<Home />} />

        <Route path="/buyer">
            <Route path="deploy" element={<DeployCTC />} />
            <Route path="detail" element={<ContractDetail />} />
        </Route>
        
        <Route path="/seller">
            <Route path="order" element={<Order />} />
            <Route path="accept" element={<AcceptOrder />} />
            <Route path="reject" element={<RejectOrder />} />
            <Route path="track" element={<SellerTrack />} />
        </Route>

       

        <Route path='/view'>
            <Route path='attach' element={ <ViewAttach />} />
            <Route path=':ctcInfo' element={ <Viewer />} />
        </Route>

        <Route path="test">
            <Route path="deploy" element={ <TestDeploy /> } />
        </Route>

        <Route path='*' element={<NotFound />} />
    </Routes>
};