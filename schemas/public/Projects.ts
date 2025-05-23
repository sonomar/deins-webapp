// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { type NamesId } from './Names';
import { type ColumnType, type Selectable, type Insertable, type Updateable } from 'kysely';

/** Identifier type for public.projects */
export type ProjectsId = number & { __brand: 'ProjectsId' };

/** Represents the table public.projects */
export default interface ProjectsTable {
  id: ColumnType<ProjectsId, ProjectsId, ProjectsId>;

  userid: ColumnType<NamesId | null, NamesId | null, NamesId | null>;

  title: ColumnType<string | null, string | null, string | null>;

  description: ColumnType<string | null, string | null, string | null>;

  email: ColumnType<string | null, string | null, string | null>;
}

export type Projects = Selectable<ProjectsTable>;

export type NewProjects = Insertable<ProjectsTable>;

export type ProjectsUpdate = Updateable<ProjectsTable>;
