import React from "react";
import { z } from "zod";

interface LoginForm {
  username: string;
  password: string;
  confirmPassword: string;
}

export const validationSchema = z.object({
  username: z
    .string()
    .nonempty("名前は必須なんだ")
    .min(4, "名前は4文字以上で入力なんだ")
    .max(12, "名前は12文字以上で入力なんだ"),
  password: z
    .string()
    .nonempty("パスワードは必須なんだ")
    .min(6, "パスワードは6文字以上で入力なんだ"),
  confirmPassword: z
    .string()
    .nonempty("確認パスワードは必須なんだ")
    .min(6, "確認パスワードは6文字以上で入力なんだ"),
});
