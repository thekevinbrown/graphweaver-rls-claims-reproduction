import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Claim } from "./claim";

@Entity({ tableName: "organization" })
export class Organization {
  @PrimaryKey({ type: "text" })
  id!: string;

  @Property({ type: "text" })
  name!: string;

  @OneToMany({ entity: () => Claim, mappedBy: "organization" })
  claims = new Collection<Claim>(this);
}
