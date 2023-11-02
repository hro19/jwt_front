import { format } from "date-fns";

export const dateFormatter = {
  Byou: (created_at:Date) =>
    format(new Date(created_at), "yyyy/MM/dd HH:mm:ss"),

  Fun: (created_at:Date) =>
    format(new Date(created_at), "yyyy/MM/dd HH:mm"),

  Zi: (created_at:Date) =>
    format(new Date(created_at), "yyyy/MM/dd HH"),

  DayJap: (created_at:Date) =>
    format(new Date(created_at), "yy年M月d日"),

  MonthDay: (created_at:Date) =>
    format(new Date(created_at), "MM/dd"),

  Month: (created_at:Date) =>
    format(new Date(created_at), "yyyy/MM"),

  Year: (created_at:Date) =>
    format(new Date(created_at), "yyyy"),
};





