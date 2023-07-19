import CourseViewPage from '../pages/courseView.page';
import Header from '../organisms/Header.organism';
import LoginSignUpPage from '../pages/loginSignUp.page';
import CourseLandingPage from '../pages/courseLanding.page';
import ShoppingCart from '../pages/shoppingCart.page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from '../organisms/signup.organism';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store/store';
import { SearchBarContextProvider } from '../../context/searchBar.context';
import CheckoutPage from '../pages/checkout.page';
import { CheckoutValidationContextProvider } from '../../context/checkoutValidation.context';
import Congratulations from '../pages/congratulation.page';
import RequireAuthRoute from '../hoc/requireAuthRoute.hoc';
import Footer from '../organisms/footer.organism';

function App() {
  const isAuthenticated = useSelector((store:AppState)=>store.user.isUserAuthenticated)
  const hideFooterRoutes = ['/checkout','/congratulation'];

  const shouldHideFooter = (path:any) => {
    return hideFooterRoutes.includes(path);
  };
  return (
    <BrowserRouter>
    
    <SearchBarContextProvider><Header isAuthenticated={isAuthenticated}/>
    <CheckoutValidationContextProvider>
    <Routes>
        <Route path="/" element={<LoginSignUpPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
            path="/courses"
            element={
              <RequireAuthRoute>
                <CourseLandingPage />
              </RequireAuthRoute>
            }
          />
        <Route path="/coursedetail/:id" element={<RequireAuthRoute><CourseViewPage /></RequireAuthRoute> } />
        <Route path="/cart" element={<RequireAuthRoute><ShoppingCart /></RequireAuthRoute>} />
        <Route path="/checkout" element={<RequireAuthRoute><CheckoutPage /></RequireAuthRoute>} />
        <Route path="/congratulation" element={<RequireAuthRoute><Congratulations /></RequireAuthRoute>} />
        <Route
          path="*"
          element={
            <img
              src="https://media.licdn.com/dms/image/C5612AQEPYce5KpNLyg/article-cover_image-shrink_720_1280/0/1551659700811?e=2147483647&v=beta&t=O9mBMiF-V12jCRJwaBNDWLKNL8cku2QSoCXtKP3vCHg"
              alt="Resource Not Found"
            />
          }
        />
      </Routes>
      </CheckoutValidationContextProvider>
      </SearchBarContextProvider>
      
      {!shouldHideFooter(window.location.pathname) && <Footer />}
    </BrowserRouter>
  );
}

export default App;


  // <div className='row'>
  //   {/* <CourseViewCard imgUrl={'https://wallpapers.com/images/featured/sukuna-xjixgtkkwa2ovcwy.jpg'} courseTitle={'The 100 days of Python Coding'} author={'Dr. Angela Yu'} rating={3.2} studentEnrolled={56445} coursePrice={5444} discountedPrice={543} isBestSellerTag={true}/> */}
  //   {/* <CartCourseCard imgUrl={"https://wallpapers.com/images/featured/sukuna-xjixgtkkwa2ovcwy.jpg"} title={"100 days of Python Coding"} author={"Henry Olsen"} rating={4.5} isBestSeller={true} numStudentRated={54645} numLecture={345} lectureLength={33} actualPrice={5777} discountedPrice={599}/> */}
  //   {/* <CartTotal actualTotalPrice={4566} discountedTotalPrice={799} percentageOff={45} onClickCheckout={function (): void {
  //     console.log("Checkout clicked");
  //   } }/> */}
  //   <LoginSignUp/>
  //   </div>
//   <div className="container my-5">
//   <div className="row justify-content-center">
//     <div className="col-md-8">
//       <Card {...cardProps} />
//     </div>
//   </div>
// </div>
// {/* <div className="container">
// <CustomComponentRow {...customComponentRowProps} />
// <BorderBoxRow {...borderBoxRowProps} />
// <PointwiseTextRow {...pointwiseTextRowProps} />
// <ParagraphRow {...paragraphRowProps} />
// </div> */}
<div>
  <ShoppingCart/>
  {/* <CourseLandingPage/> */}
  {/* <LoginSignUpPage/> */}
  {/* <NotLoggedInHeader/>*/}
{/* <CourseViewPage/>  */}
</div>

    // {/* <div className="d-flex justify-content-center align-items-center"><SignupForm></SignupForm></div></div> */}







