// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { type ColumnType, type Selectable, type Insertable, type Updateable } from 'kysely';

/** Identifier type for public.names */
export type NamesId = number & { __brand: 'NamesId' };

/** Represents the table public.names */
export default interface NamesTable {
  id: ColumnType<NamesId, NamesId, NamesId>;

  firstname: ColumnType<string | null, string | null, string | null>;

  lastname: ColumnType<string | null, string | null, string | null>;

  email: ColumnType<string | null, string | null, string | null>;
}

export type Names = Selectable<NamesTable>;

export type NewNames = Insertable<NamesTable>;

export type NamesUpdate = Updateable<NamesTable>;
