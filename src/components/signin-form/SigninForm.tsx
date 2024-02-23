import { FC } from "react";

import styles from "./SignInForm.module.scss";

import FormField from "components/common/form-field/FormField";
import LoadingButton from "components/common/loading-button/LoadingButton";
import Form from "components/common/form/Form";
import { useSigninForm } from "hooks/useSigninForm";

const SigninForm: FC = () => {
  const { formMethods, onSubmit, isLoading } = useSigninForm();

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <FormField label="Username" name="name" type="text" />
      <div className={styles.submitButtonContainer}>
        <LoadingButton className={styles.submitButton} isLoading={isLoading}>
          sign in
        </LoadingButton>
      </div>
    </Form>
  );
};

export default SigninForm;
