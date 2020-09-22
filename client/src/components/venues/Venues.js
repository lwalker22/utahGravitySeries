import React, { Fragment, Component } from 'react';
import { VenueConsumer } from '../../providers/VenueProvider';
import VenueForm from './VenueForm';
import VenueList from './VenueList';
import { FormContainer, FormHeader1, FormHeader2, FormHeader3} from '../styledComponents/FormStyles';
import { SubmitButton, EditButton, DeleteButton, ButtonDiv1, ButtonDiv2 } from '../styledComponents/CommonStyles';
import { VenueContainer, VenueHeader, VenueLink } from '../styledComponents/VenueStyles';



// class Venues extends Component {
//   state = { adding: false, formValues: { name: '', address: '', date: '', }, };
//   toggleUpdate = () => this.setState({ adding: !this.state.adding })

  
//   toggleAdd = () => {
//     this.setState( state => {
//       return { adding: !state.adding, };
//     })
//   }

//   venueList = () => {
//     return (
//       <FormContainer>
//         <VenueForm />
//       </FormContainer>
//     )
//   }

//   addView = () => {
//     const { addVenue, updateVenue, history } = this.props
//     const { id, name, address, date } = this.props.location.state
//     return (
//     <VenueConsumer> 
//       {
//         value => (
//           <Fragment>
//             <VenueForm addVenue={value.addVenue} />
//             <VenueList venues={value.venues} />
//           </Fragment>
//         )
//       }
//     </VenueConsumer>
//     )
//   }


//   render () {
//     // const { id, name, address, date } = this.props.location.state
//     const { editing } = this.state
//     return (
//       <FormContainer>
//         { editing ? this.addView() : this.venueList()}
//         <EditButton 
//           onClick={this.toggleAdd}>{editing ? 'Cancel' : 'Edit'}
//         </EditButton>
//       </FormContainer>
//     )
//   }

// }

//   const ConnectedVenueShow = (props) => (
//     <VenueConsumer>
//       { value => (
//         <Venues
//         {...props}
//         addVenue={value.addVenue}
//         />
//         )}
//     </VenueConsumer>
//   )

//   const VenueList = ({ venues }) => (
//     <VenueContainer>
//       <VenueHeader>Venues</VenueHeader>
//       {
//         venues.map( v => 
//           <Fragment>
//             <VenueLink to={{
//               pathname: `/venues/${v.id}`,
//               state: {...v}
//             }}>
//               { v.name }
//             </VenueLink>
//           </Fragment>
//         )
//       }
//       <br/>
//       <br/>
//       <br/>
//     </VenueContainer>
//   )
  
//   export default ConnectedVenueShow;
  
  // showVenues = () => (
  //   <VenueConsumer> 
  //     {
  //       value => (
  //         <Fragment>
  //           <VenueForm addVenue={value.addVenue} />
  //           <VenueList venues={value.venues} />
  //         </Fragment>
  //       )
  //     }
  //   </VenueConsumer>
  // )



//   allVenues = () => {
  //     return (
    //       value => (
      //         <Fragment>
      //            <VenueList venues={value.venues} />
      //         </Fragment>
      //       )
      //     )
      //   }
      
      
      //   addView = () => {
        //     return (
          //         <Fragment>
          //           <VenueForm />
          //         </Fragment>
          //     )
          //   }
          
          //   render () {
            //     // const { id, name, address, date } = this.props.location.state
            //     const { adding } = this.state
            //     return (
              //       <FormContainer>
              //         { adding ? this.addView() : this.allVenues()}
              //         <EditButton 
              //           onClick={this.toggleAdd}>{adding ? 'Cancel' : 'Add Venue'}
              //         </EditButton>
              //       </FormContainer>
              //     )
              //   }
              
              // }
              
              // const ConnectedVenues = (props) => (
                //   <VenueConsumer>
                //     { value => (
                  //       <Venues
                  //       {...props}
                  //       addVenue={value.addVenue}
                  //       />
                  //       )}
                  //   </VenueConsumer>
                  // )
                  
                  // export default ConnectedVenues;
                  
                  
const Venues = () => (
  <VenueConsumer> 
    {
      value => (
        <Fragment>
          <VenueForm addVenue={value.addVenue} />
          <VenueList venues={value.venues} />
        </Fragment>
      )
    }
  </VenueConsumer>
)

export default Venues;