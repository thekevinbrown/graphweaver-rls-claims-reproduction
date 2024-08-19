import { Entity, ManyToOne, PrimaryKey, Property, Ref } from "@mikro-orm/core";
import { Organization } from "./organization";

@Entity({ tableName: "claim" })
export class Claim {
  @PrimaryKey({ type: "text", nullable: true })
  id?: string;

  @Property({ type: "text" })
  name!: string;

  @Property({ type: "text", nullable: true })
  createdAt?: string;

  @Property({ type: "text", nullable: true })
  updatedAt?: string;

  @Property({ type: "integer", nullable: true, default: 0 })
  deleted = 0;

  @Property({ type: "text", nullable: true })
  type?: string;

  @Property({ type: "text", nullable: true })
  level?: string;

  @ManyToOne({ entity: () => Organization, ref: true, nullable: true })
  organization?: Ref<Organization>;
}
