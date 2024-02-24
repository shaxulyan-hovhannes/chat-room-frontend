import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import {
  SigninFormValues,
  signinValidationSchema,
} from "../validation/signinValidation";

import { Paths } from "routes";
import { IUser } from "models/user";

import localStorageService from "services/localStorageService";
import socketService from "services/socketService";

export const useSigninForm = () => {
  const navigate = useNavigate();

  const formMethods = useForm<SigninFormValues>({
    mode: "onBlur",
    resolver: yupResolver(signinValidationSchema),
    defaultValues: {
      name: "Hovo",
    },
  });

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(({ name }) => {
      const user = {
        id: uuidv4(),
        name,
      };
      localStorageService.setItem("user_info", JSON.stringify(user));
      socketService.createUser(user);
      socketService.join(user.id);
      navigate(Paths.CHATROOM);
    }),

    isLoading: false,
  };
};
