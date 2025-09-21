import React from "react";
import {Routes,Route} from "react-router-dom";
import UserHomePage from "./usersApp/UserHomePage";
import EnrolledCourse from "./usersApp/EnrolledCourse";
import UserProfile from "./usersApp/UserProfile";
import SalesHomePage from "./salesApp/SalesHomePage";
import CreateSales from "./salesApp/CreateSales";
import ViewSales from "./salesApp/ViewSales";




<Routes>
<Route path="/UserDashbord" element={<UserHomePage/>}>
  <Route path="enrolledCourse" element={<EnrolledCourse/>}/>
  <Route path="userProfile" element={<UserProfile/>}/>

</Route>
<Route path="/salesDashboard" element={<SalesHomePage/>}/>
<Route path="createsales" element={<CreateSales/>}/>
<Route path="viewsales" element={<ViewSales/>}/>
<Route path="*" element={<h1>page not found</h1>}/>

</Routes>


