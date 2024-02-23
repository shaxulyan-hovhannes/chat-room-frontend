import * as yup from "yup";

export interface SigninFormValues
  extends yup.InferType<typeof signinValidationSchema> {}

export const signinValidationSchema = yup.object({
  name: yup.string().required(),
});
