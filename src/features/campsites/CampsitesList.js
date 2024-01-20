import { Col, Row } from "reactstrap";
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from "./campsitesSlice";
import { useSelector } from "react-redux";

import Error from "../../components/Error";
import Loading from "../../components/Loading";

//This is a very small example of where doing these things piecemeal and introducing
// concepts before there's a logical need driven by the current state of our application misses big opportunities to reinforce "React Thinking."
// There's absolutely no need for Error and Loading to be separate components if we're just adding them to 1 page.
// So instead of seizing the opportunity to reinforce a positive pattern we introduce an anti-pattern of over-component-izing things.
// Of course eventually we'll find out that we probably need these components on every page
// and it makes total sense for them to be separate components, but instead of establishing the problem
// where we naturally see ourselves duplicating code too much, we're given the solution first,
// and when you're given the solution without understanding the problem it becomes hella more difficult to understand
// the solution at any memorable depth. And really it can permanently hinder your opportunity to grasp the problem. But also this isn't
// how development progresses in the wild. If you're "developing" something that you know what the problems will be before you start, then you're not
// doing anything all that valuable.
// I get that it's hard to find that balance between exposure and actual learning, when broad exposure
// is genuinely part of the goal because of the pace, but I think there needs to be a more sophisticated refactoring
// of the things that can be merely exposed and those that need to be thoroughly grasped.

// And there's another hugely crucial step to understand what's going on here that was already completed and incorporated
// as part of a wholly separate concern from a completely separate content section. And I don't see at all in this content that we even reference the pivotal code
// from the campsitesSlice extraReducers that makes this all work with the global state. I guess the assumption is that we
// have a rock solid understanding of what useSelector() does here.

// But FFS how hard is it to just give a rundown of what's really happening here?

/*We want to display the current state of our data fetch by displaying the Error Component, the Loading Component, or 
the expected content if/when our data fetch is fulfilled or rejected. The data fetch itself and the logic for determining the state of the data 
fetch is in campsitesSlice.js. So this code uses useSelector to reach outside of this component into the fluctuating state. Because of 
the logic in campsitesSlice.js we know that only 1 of these options for state can be truthy at any given time. This is why looking
back to campsitesSlice.js is so important. Otherwise it remains a complete mystery how the code from this component(CampsitesList.js) only
renders one of these choices at a time. Yes, you can make assumptions and get there just by zooming into the code isolated on this single 
component, but again this is such a wasted opportunity to make us explore how the different parts of our app function together.
so much effort has been made to give us a project that employs best practices, but almost no effort goes into highlighting the why and how
of those best practices.
*/
/* The video begins showing the buildout for a fucking <i> element for 45 seconds 2:40 - 3:25. That's unbelievably irrelevant. 
  Expanding on that the videos do a poor job of emphasizing the most important ,hardest to conceptualize, takeaways - or the
  application level logic. 

*/

const CampsitesList = () => {
  const campsites = useSelector(selectAllCampsites);

  // Why do we use useSelector here and not use it in campsitesSlice.js?
  const isLoading = useSelector((state) => state.campsites.isLoading);
  const errMsg = useSelector((state) => state.campsites.errMsg);

  if (isLoading) {
    return (
      <Row>
        <Loading />
      </Row>
    );
  }

  if (errMsg) {
    return (
      <Row>
        <Error errMsg={errMsg} />
      </Row>
    );
  }

  return (
    <Row className="ms-auto">
      {campsites.map((campsite) => {
        return (
          <Col md="5" className="m-4" key={campsite.id}>
            <CampsiteCard campsite={campsite} />
          </Col>
        );
      })}
    </Row>
  );
};

export default CampsitesList;
