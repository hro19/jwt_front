import { atom, useAtomValue } from "jotai";
import { atomWithReset } from "jotai/utils";
import { User } from "../ts/User";

export const userAtom = atomWithReset<User | null>(null);
