import React, { Component } from 'react';
import {VenueConsumer} from '../../providers/VenueProvider';
import VenueForm from './VenueForm'
import { FormContainer, FormHeader1, FormHeader2, FormHeader3} from '../styledComponents/FormStyles';
import { EditButton, DeleteButton } from '../styledComponents/ButtonStyles';
import check_flag from '../logos/check_flag.jpg';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';


class VenueShow extends Component {
  state = { editing: false, formValues: { name: '', address: '', date: '', file: '', }, };
  toggleUpdate = () => this.setState({ editing: !this.state.editing })

  componentDidMount() {
    const { name, address, date, file} = this.props;
    this.setState({ formValues: { name, address, date, file }, });
  }

  toggleEdit = () => {
    this.setState( state => {
      return { editing: !state.editing, };
    })
  }

  venueView = () => {
    const { id, name, address, date } = this.props.location.state
    return (
      <div>
        <div>
          <Image src={check_flag} />
        </div>
        <Display>
          <DisplayH1>{name}</DisplayH1>
          <br></br>
          <DisplayH2>Location:  {address}</DisplayH2>
          <DisplayH3>Date:  {date}</DisplayH3>
        </Display>
      </div>
    )
  }

  onDrop = (files) => {
    this.setState({ formValues: { ...this.state.formValues, file: files[0], } });
  }

  editView = () => {
    const { updateVenue, deleteVenue, history } = this.props
    const { id, name, address, date } = this.props.location.state
    return (
      <FormContainer>
        <FormHeader1>{name}</FormHeader1>
        <FormHeader2>{address}</FormHeader2>
        <FormHeader3>{date}</FormHeader3>
            <Dropzone
              onDrop={this.onDrop}
              multiple={false}
            >
              {({ getRootProps, getInputProps, isDragActive }) => {
                return (
                  <div
                    {...getRootProps()}
                    style={styles.dropzone}
                  >
                    <input {...getInputProps()} />
                    {
                      isDragActive ?
                        <p>Drop files here...</p> :
                        <p>Drop picture here or select file to upload.</p>
                    }
                  </div>
                )
              }}
            </Dropzone>
            <br></br>
            <VenueForm
              id={id}
              name={name}
              address={address}
              date={date}
              updateVenue={updateVenue}
              toggleUpdate={this.toggleUpdate}
              history={history}
            />
            <DeleteButton onClick={() => deleteVenue(id, history)}>
              Delete
            </DeleteButton>
      </FormContainer>
    )
  }


  render () {
    // const { id, name, address, date } = this.props.location.state
    const { editing } = this.state
    return (
      <FormContainer>
        { editing ? this.editView() : this.venueView()}
        <EditButton 
          onClick={this.toggleEdit}>{editing ? 'Cancel' : 'Edit'}
        </EditButton>
      </FormContainer>
    )
  }


}

const ConnectedVenueShow = (props) => (
  <VenueConsumer>
    { value => (
      <VenueShow
      {...props}
      updateVenue={value.updateVenue}
      deleteVenue={value.deleteVenue}
      />
      )}
  </VenueConsumer>
)

const defaultImage = require('../logos/mtb_logo.jpg');

const styles = {
  dropzone: {
    height: "180px",
    width: "150px",
    border: "1px dashed white",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    color: "white",
    display: "block",
    margin: "0 auto",
    marginTop: "1em"
  },
}

export default ConnectedVenueShow;

const Display = styled.div`
  color: black;
  text-align: left;
  margin: 1em;
  font-family: 'Inter', serif;
`;

const Display1= styled.div`
  margin: 1em;
`;

const DisplayH1 = styled.div`
  
  @media screen and (min-width: 320px) {
    font-size: 1em;
  }
  @media screen and (min-width: 360px) {
    font-size: 1em;
  }
  @media screen and (min-width: 579px) {
    font-size: 3em;
  }

`;

const DisplayH2 = styled.div`
  margin: 1em;
  @media screen and (min-width: 320px) {
    font-size: 1em;
  }
  @media screen and (min-width: 360px) {
    font-size: .75em;
  }
  @media screen and (min-width: 579px) {
    font-size: 1.5em;
  }

`;

const DisplayH3 = styled.div`
  margin: 1em;
  @media screen and (min-width: 320px) {
    font-size: 1em;
  }
  @media screen and (min-width: 360px) {
    font-size: .75em;
  }
  @media screen and (min-width: 579px) {
    font-size: 1.5em;
  }
`;

const Image = styled.img`
  float: right;
  margin: 2em;
  @media screen and (min-width: 320px) {
    width: auto;
    height: 4em;
  }
  @media screen and (min-width: 360px) {
    width: auto;
    height: 4em;
  }
  @media screen and (min-width: 579px) {
    width: auto;
    height: 8em;
  }
`;

// const { updateVenue, deleteVenue, history } = this.props
//   return (
//     <FormContainer>
//       <FormHeader1>{name}</FormHeader1>
//       <FormHeader2>{address}</FormHeader2>
//       <FormHeader3>{date}</FormHeader3>
//       { editing ?
//           <VenueForm
//             id={id}
//             name={name}
//             address={address}
//             date={date}
//             updateVenue={updateVenue}
//             toggleUpdate={this.toggleUpdate}
//             history={history}
//           />
//         :
//         <ButtonDiv1>
//           <EditButton onClick={this.toggleUpdate}>
//             Edit
//           </EditButton>
//         </ButtonDiv1>
//         }
//         <ButtonDiv2>
//           <DeleteButton onClick={() => deleteVenue(id, history)}>
//             Delete
//           </DeleteButton>
//         </ButtonDiv2>
//     </FormContainer>
//   )
// }