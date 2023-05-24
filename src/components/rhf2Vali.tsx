import React from "react";
import { z } from "zod";

interface LoginForm {
  name: string;
  email: string;
  password: string;
}

export const validationSchema = z.object({
  name: z
    .string()
    .nonempty("名前は必須なんだ")
    .min(4, "名前は4文字以上で入力なんだ"),
  email: z
    .string()
    .nonempty("メールアドレスは必須なんだ")
    .email("正しいメールアドレスを入力なんだ"),
  password: z
    .string()
    .nonempty("パスワードは必須なんだ")
    .min(6, "パスワードは6文字以上で入力なんだ"),
});
