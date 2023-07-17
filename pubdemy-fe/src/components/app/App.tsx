import React from 'react';
import LoginForm from '../molecules/loginForm.molecule';
import SignupForm from '../molecules/signupForm.molecule';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import IconTextBox from '../atoms/iconTextBox.atom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlatButton from '../atoms/flatButton.atom';
import RatingBestseller from '../molecules/ratingBestseller.molecule';
import CourseViewCard from '../organisms/courseViewCard.organism';
import CartCourseCard from '../organisms/cartCourseCard.organism';
import CartTotal from '../molecules/cartTotal.molecule';
import LoginSignUp from '../molecules/loginSignup.molecule';
import CourseEnrollCard from '../organisms/courseEnrollCard.organism';
import CourseDetailRow from '../organisms/courseDetailRow.organism';
import BorderBoxRow from '../organisms/courseOffering.organism';
import CourseRequirementRow from '../organisms/courseRequirement.organism';
import CourseDescriptionRow from '../organisms/courseDescription.organism';
import CourseOfferingRow from '../organisms/courseOffering.organism';
import CourseViewPage from '../pages/courseView.page';
import NotLoggedInHeader from '../organisms/notLoggedInHeader.organism';

function App() {
  return (      
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
  <NotLoggedInHeader/>
<CourseViewPage/>
</div>

    // {/* <div className="d-flex justify-content-center align-items-center"><SignupForm></SignupForm></div></div> */}
  );
}

export default App;







