import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  SigninFormValues,
  signinValidationSchema,
} from "../validation/signinValidation";

export const useSigninForm = () => {
  const formMethods = useForm<SigninFormValues>({
    mode: "onBlur",
    resolver: yupResolver(signinValidationSchema),
  });

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit((data) => {
      console.log("FORM", data);
    }),

    isLoading: false,
  };
};
