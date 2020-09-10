import React, { Fragment, Component } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Form, Grid, Image, Container, Divider, Header, Button, } from 'semantic-ui-react';
import { FormContainer, FormHeader1, FormStyle, FormInput } from '../styledComponents/FormStyles';
import { SubmitButton, EditButton } from '../styledComponents/CommonStyles';
import styled from 'styled-components';
import mtb_logo from '../logos/mtb_logo.jpg';

import Dropzone from 'react-dropzone';
import { withTheme } from 'styled-components';

// const defaultImage = <img source={require('../logos/mtb_logo.jpg')} />;
const defaultImage = require('../logos/mtb_logo.jpg');


class Profile extends Component {
  state = { editing: false, formValues: { name: '', email: '', file: '', }, };
  
  componentDidMount() {
    const { auth: { user: { name, email, }, }, } = this.props;
    this.setState({ formValues: { name, email, }, });
  }
  
  toggleEdit = () => {
    this.setState( state => {
      return { editing: !state.editing, };
    })
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({
      formValues: {
        ...this.state.formValues,
        [name]: value,
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { formValues: { name, email, file, }, } = this.state;
    const { auth: { user, updateUser, }, } = this.props;
    updateUser(user.id, { name, email, file, });
    this.setState({
      editing: false,
      formValues: {
        ...this.state.formValues,
        file: "",
      },
    });
  }
  
  profileView = () => {
    const { auth: { user }, } = this.props;
    return (
      <FormContainer>
        <Grid.Column width={2}>
          <ImageContainer src={user.image || defaultImage}/>
        </Grid.Column>
        <Grid.Column width={8}>
          <FormHeader1 as="h1">{user.name}</FormHeader1>
          <FormHeader1 as="h1">{user.email}</FormHeader1>
        </Grid.Column>
      </FormContainer>
    )
  }
  
  onDrop = (files) => {
    this.setState({ formValues: { ...this.state.formValues, file: files[0], } });
  }

  editView = () => {
    const { auth: { user }, } = this.props;
    const { formValues: { name, email, file, } } = this.state;
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <Grid.Column width={4}>
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
        </Grid.Column>
        <FormStyle >
          <FormInput
            label="Name"
            name="name"
            value={name}
            required
            onChange={this.handleChange}
          />
          <FormInput
            label="Email"
            name="email"
            value={email}
            required
            onChange={this.handleChange}
          />
          <br></br>
          <br></br>
          <SubmitButton>Update</SubmitButton>
        </FormStyle>
      </FormContainer>
    )
  }
  
  render() {
    const { editing, } = this.state;
    return (
      <FormContainer>
        <Divider hidden />
        <Grid>
          <Grid.Row>
            { editing ? this.editView() : this.profileView()}
            <Grid.Column>
              <EditButton onClick={this.toggleEdit}>{editing ? 'Cancel' : 'Edit'}</EditButton>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </FormContainer>
    )
  }
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { auth => 
      <Profile { ...props } auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedProfile;

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

const ImageContainer = styled.img`
  margin: 2em;
  height: 6em;
  width: auto;
  padding-left: 2em;
  padding-right: 2em;
`;

// const Profile = () => (
//   <div>
//     <h1>Welcome User</h1>
//   </div>
// )

// export default Profile;