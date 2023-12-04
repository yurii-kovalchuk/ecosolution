import { useFormik } from "formik";
import * as Yup from "yup";
import ArrowRightIcon from "../../assets/media/icons/arrow-right.svg?react";
import {
  Form,
  Label,
  Input,
  Textarea,
  SubmitBtn,
  SubmitTxt,
  SubmitIcon,
  ErrorMessage,
  FieldWrap,
} from "./ContactForm.styled";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[a-zA-Zа-яА-Я ]+$/, "Wrong Fullname")
        .min(3, "Too short")
        .max(30, "Too long")
        .required("Fullname cannot be empty"),
      email: Yup.string()
        .email("Wrong Email")
        .required("Email cannot be empty"),
      phone: Yup.string()
        .matches(/^3[0-9]{11}$/, "Wrong Phone")
        .required("Phone cannot be empty"),
      message: Yup.string().min(3, "Too short").max(300, "Too long"),
    }),
    onSubmit: (values, formik) => {
      console.log(values);
      alert("Success!");
      formik.resetForm();
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <FieldWrap>
        <Label htmlFor="name">* Full name:</Label>
        <Input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="John Rosie"
          className={
            formik.touched.name && formik.errors.name ? "is-invalid" : ""
          }
        />
        {formik.touched.name && formik.errors.name ? (
          <ErrorMessage>{formik.errors.name}</ErrorMessage>
        ) : null}
      </FieldWrap>

      <FieldWrap>
        <Label htmlFor="email">* E-mail:</Label>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="johnrosie@gmail.com"
          className={
            formik.touched.email && formik.errors.email ? "is-invalid" : ""
          }
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        ) : null}
      </FieldWrap>

      <FieldWrap>
        <Label htmlFor="phone">* Phone:</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          onChange={formik.handleChange}
          value={formik.values.phone}
          placeholder="380961234567"
          className={
            formik.touched.phone && formik.errors.phone ? "is-invalid" : ""
          }
        />
        {formik.touched.phone && formik.errors.phone ? (
          <ErrorMessage>{formik.errors.phone}</ErrorMessage>
        ) : null}
      </FieldWrap>

      <FieldWrap>
        <Label htmlFor="message">Message:</Label>
        <Textarea
          id="message"
          name="message"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.message}
          placeholder="Your message"
          rows={6}
          className={
            formik.touched.message && formik.errors.message ? "is-invalid" : ""
          }
        />
        {formik.touched.message && formik.errors.message ? (
          <ErrorMessage>{formik.errors.message}</ErrorMessage>
        ) : null}
      </FieldWrap>

      <SubmitBtn type="submit">
        <SubmitTxt>Send</SubmitTxt>
        <SubmitIcon>
          <ArrowRightIcon />
        </SubmitIcon>
      </SubmitBtn>
    </Form>
  );
};

export default ContactForm;
