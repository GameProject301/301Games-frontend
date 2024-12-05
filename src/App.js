import React from 'react';
import './App.css';
import { withAuth0 } from '@auth0/auth0-react';
import Main from "./Component/Main";
import Header from './Component/Header';
import Footer from './Component/Footer';
import PC from './Component/PC';
import Platforms from './Component/Platforms';
import Profile from './Component/Profile';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Mobile from './Component/mobile';
import PlayStation from './Component/Playstation';
import Explore from './Component/Explore';
import Recently from './Component/Recently';
import Top from './Component/Top';
import Category from "./Component/Category";
import Generate from './Component/Generate';
import Support from './Component/Support';
import CarouselRecommanded from './Component/assets/CarouselRecommanded';
import About from './Component/About';
import Interested from './Component/Interested';
import TopSlider from "./Component/TopSlider";
import Sidebar from "./Component/Sidebar";
class App extends React.Component {
// 
  render() {
    const { isAuthenticated } = this.props.auth0;

    return (
      <>
        <Router>
          <Header />
          <Routes>


            <Route
              exact path="/Profile"
              element={isAuthenticated && <>   <Sidebar />
              <Profile /> </>
              }
            >
            </Route>

             <Route
              exact path="/"
              element={
              <><CarouselRecommanded />
              <Platforms />
              </>}
            >

              </Route>
            <Route 
              exact path="/home"
              element={isAuthenticated && <><CarouselRecommanded />
               <Main />
               <Platforms />
               </>}
>
            </Route> 
            
            <Route
              exact path="/pc"

              element={isAuthenticated &&
                <>   
                <Sidebar />
                                  <PC />
                  <Generate />
                </>
              }
            >
            </Route>

            <Route

              exact path="/mobile"
              element={isAuthenticated &&
                <>   <Sidebar />
                
                  <Mobile />
                  <Generate />
                </>
              }
            >
            </Route>
            <Route
              exact path="/playstation"
              element={isAuthenticated &&  <> <Sidebar /> <PlayStation />
              <Generate />
              </>}
            >
            </Route>
            <Route
              exact path="/explore"
              element={
              <> 
              <Sidebar />
              {/* <CarouselRecommanded /> */}
              <Explore />
             
            </>
            }
            >
            </Route>

            <Route
              exact path="/recently"
              element={isAuthenticated &&<> <Sidebar /> <TopSlider /> <Recently /></>}

            >
            </Route>
            <Route
              exact path="/top"
              element={isAuthenticated &&  <>   <Sidebar />
              <Top />
              </>
              }
            >
            </Route>
            <Route
              exact path="/category"
              element={isAuthenticated && 
              <>
              <Sidebar />
            <TopSlider/>
              <Category />
              </>}
            >
            </Route>


            <Route
              exact path="/profile"
              element={isAuthenticated && <Profile />}
            >
            </Route>
            <Route
            exact path="/Support"
            element={isAuthenticated && <Support />}
            >
          </Route>
          <Route
            exact path="/about"
            element={<About />}
            >
          </Route>
        
        
        </Routes>
        <Footer />
      </Router>
</>
    )
  }
}
export default withAuth0(App);