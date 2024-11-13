import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import LightButton from "../LightButton";

const WriteUs = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Submitted Data:", values);
  };

  return (
    <section className="write-us-container">
      <h2 className="write-us-title">Write Us</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="write-us-form">
            <div className="form-group">
              {errors.name && touched.name ? (
                <div className="form-error">{errors.name}</div>
              ) : (
                <label htmlFor="name">Name</label>
              )}
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              {errors.email && touched.email ? (
                <div className="form-error">{errors.email}</div>
              ) : (
                <label htmlFor="email">Email</label>
              )}
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              {errors.message && touched.message ? (
                <div className="form-error">{errors.message}</div>
              ) : (
                <label htmlFor="message">Message</label>
              )}
              <Field
                as="textarea"
                id="message"
                name="message"
                placeholder="Write your message"
                rows={4}
                className="form-control"
              />
            </div>
            <div className="form-submit">
              {isSubmitting || (
                <LightButton
                  onClick={() => null}
                  title="Send"
                  variant="light"
                />
              )}
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default WriteUs;
