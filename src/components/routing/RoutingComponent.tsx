import { Route, Routes } from "react-router";
import { LoginFormComponent } from "../login/LoginFormComponent";
import { RegistrationComponent } from "../registration/RegistrationComponent";
import { HomeComponent } from "../home/HomeComponent";
import { ErrorComponent } from "../error/ErrorComponent";

export default function RoutingComponent() {
    return (
        <Routes>
            <Route path='/home' element={<HomeComponent />} />
            <Route path='/login' element={<LoginFormComponent />} />
            <Route path='/registration' element={<RegistrationComponent />} />
            <Route path='/error' element={<ErrorComponent />} />
        </Routes>
    );
}