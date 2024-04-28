import { useMutation } from "@tanstack/react-query"
import axios from "axios"

import { useLogin } from "../../store/hooks/auth";
import { AuthState } from "../../store/types/auth";
import LoginFormValues from "../../types/LoginFormValues";
import RegisterFormValues from "../../types/RegisterFormValues"

const baseURL = `${import.meta.env.VITE_BASE_API_URL}/auth`;
// const baseURL = `${process.env.BASE_API_URL}/auth`;
// const baseURL = `1234`;

export function useRequestRegister() {
    const onSuccess = useLogin();

    return useMutation({
        async mutationFn(values: RegisterFormValues) {
            const { data } = await axios.post<AuthState>("register", values, {
                baseURL,
            });
            return data
        },
        // onSuccess
    })
}

export function useRequestLogin() {
    const onSuccess = useLogin();
  
    return useMutation({
      async mutationFn(values: LoginFormValues) {
        const { data } = await axios.post<AuthState>("login", values, {
          baseURL,
        });
        return data;
      },
      onSuccess,
    });
  }