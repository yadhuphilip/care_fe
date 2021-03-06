import React from 'react';
import { Login } from '../Components/Auth';
import { useRoutes } from 'hookrouter';
import TopBar from "../Components/Common/TopBar";
import { PublicDashboard } from '../Components/Dashboard/PublicDashboard';
import { VehicleDetailsForm } from '../Components/Ambulance/VehicleDetailsForm';
import { DriverDetailsForm } from '../Components/Ambulance/DriverDetailsForm';
import AmbulanceOnboarding from "../Components/Ambulance/AmbulanceOnboarding";

const routes = {
    '/': () => <Login />,
    '/login': () => <Login />,
    '/dashboard': () => <PublicDashboard />,
    '/ambulance': () => <AmbulanceOnboarding />,
};

const SessionRouter = () => {
    const content = useRoutes(routes) || <Login />;
    return (
        <div>
            <TopBar />
            <div className="w3-padding">
                {content}
            </div>
            <div className="app-footer">
                <div className="copy-right">
                    Corona Care Network
                </div>
            </div>
        </div>
    )
};

export default SessionRouter;
