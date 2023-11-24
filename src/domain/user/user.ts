import { v4 as UUID } from 'uuid';

export type UUID = string;

export type User = {
  id: UUID;
  name: string;
  email: string;
};