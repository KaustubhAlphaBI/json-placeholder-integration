import { z } from 'zod';
import { userSchema, usersSchema } from './validators/userSchema';

export type Users = z.infer<typeof usersSchema>
export type User = z.infer<typeof userSchema>