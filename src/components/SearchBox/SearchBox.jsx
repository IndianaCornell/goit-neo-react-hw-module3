import React from "react";
import { Formik, Form, Field } from "formik";
import clsx from "clsx";

import css from "./SearchBox.module.css";

function SearchBox({ setFilter }) {
  return (
    <Formik initialValues={{ search: "" }}>
      {({ values, handleChange }) => (
        <Form>
          <Field
            type="text"
            name="search"
            placeholder="Search contacts..."
            value={values.search}
            className={clsx(css.contactLabel)}
            onChange={(e) => {
              handleChange(e);
              setFilter(e.target.value);
            }}
          />
        </Form>
      )}
    </Formik>
  );
}

export default SearchBox;
