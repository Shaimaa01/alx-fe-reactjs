/* eslint-disable no-unused-vars */
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values) => {
    console.log(values); // Simulate form submission
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="username">Username</label>
          <Field
            type="text"
            id="username"
            name="username"
          />
          <ErrorMessage name="username" component="p" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            id="email"
            name="email"
          />
          <ErrorMessage name="email" component="p" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            id="password"
            name="password"
          />
          <ErrorMessage name="password" component="p" />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
