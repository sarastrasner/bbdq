import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import emailjs, { init } from 'emailjs-com';
init('user_DF8dRsVIzSFIAt0uATibi');

function EmailForm() {
  const [email, updateEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    sendEmail();
  };

  let templateParams = {
    to_email: email
  };

  const sendEmail = () => {
    emailjs.send('service_kwry7lk', 'template_bhq50of', templateParams).then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text);
      },
      function (error) {
        console.log('FAILED...', error);
      }
    );
  };

  const handleInputChange = e => {
    updateEmail(e.target.value);
  };

  return (
    <>
      <Form id="form" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter your email address to receive your BBDQ badge.</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted">
            We're not fancy enough to even <i>consider</i> sharing your email.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            required
            type="checkbox"
            label="I solemnly swear that I am a BBDG"
          />
        </Form.Group>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
}

export default EmailForm;
