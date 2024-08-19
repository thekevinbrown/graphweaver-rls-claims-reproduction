import { Entity, Field, ID, RelationshipField } from "@exogee/graphweaver";
import { MikroBackendProvider } from "@exogee/graphweaver-mikroorm";
import { ApplyAccessControlList } from "@exogee/graphweaver-auth";
import { Claim } from "./claim";
import { Organization as OrmOrganization } from "../entities";
import { connection } from "../database";

@ApplyAccessControlList({
  LoggedInUser: {
    read: true,
  },
})
@Entity<Organization>("Organization", {
  provider: new MikroBackendProvider(OrmOrganization, connection),
})
export class Organization {
  @Field(() => ID, { primaryKeyField: true })
  id!: string;

  @Field(() => String, { adminUIOptions: { summaryField: true } })
  name!: string;

  @RelationshipField<Claim>(() => [Claim], { relatedField: "organization" })
  claims!: Claim[];
}
