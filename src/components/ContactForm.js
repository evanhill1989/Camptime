import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form } from "formik";

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("form values:", values);
    console.log("in JSON format:", JSON.stringify(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNum: "",
        email: "",
        agree: false,
        contactType: "By Phone",
        feedback: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormGroup row>
          <Label htmlFor="firstName" md="2">
            First Name
          </Label>
          <Col md="10">
            <Field
              className="form-control"
              name="firstName"
              placeholder="First Name"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="lastName" md="2">
            Last Name
          </Label>
          <Col md="10">
            <Field
              name="lastName"
              className="form-control"
              placeholder="Last Name"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="phoneNum" md="2">
            Phone Number
          </Label>
          <Col md="10">
            <Field
              name="phoneNum"
              placeholder="Phone Number"
              className="form-control"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="email" md="2">
            Email
          </Label>
          <Col md="10">
            <Field
              name="email"
              placeholder="email"
              type="email"
              className="form-control"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label check md={{ size: 4, offset: 2 }}>
            '
            <Field
              name="agree"
              type="checkbox"
              className="form-check-input"
            />{" "}
            May we contact you?
          </Label>
          <Col md="4">
            <Field className="form-control" name="contactType" as="select">
              <option>By Phone</option>
              <option>By Email</option>
            </Field>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="feedback" md="2">
            Your Feedback
          </Label>
          <Col md="10">
            <Field
              name="feedback"
              as="textarea"
              rows="12"
              className="form-control"
            />
          </Col>
        </FormGroup>
        <Col md={{ size: 10, offset: 2 }}>
          <Button type="submit" color="primary">
            Send Feedback
          </Button>
        </Col>
        <FormGroup row></FormGroup>
      </Form>
    </Formik>
  );
};

export default ContactForm;