import { Authentication } from "./authentication";
import { Claim } from "./claim";
import { Organization } from "./organization";

export * from "./authentication";
export * from "./claim";
export * from "./organization";

export const entities = [Authentication, Claim, Organization];
