import { Entity, Field, ID, RelationshipField } from "@exogee/graphweaver";
import { MikroBackendProvider } from "@exogee/graphweaver-mikroorm";
import { Organization } from "./organization";
import { Claim as OrmClaim } from "../entities";
import { connection } from "../database";
import {
  ApplyAccessControlList,
  AuthorizationContext,
} from "@exogee/graphweaver-auth";

// For filtering to just claims from the user's org
// @ApplyAccessControlList<
//   unknown,
//   AuthorizationContext & { user: { organizationId: string } }
// >({
//   LoggedInUser: {
//     read: ({ user }) => ({ organization: user.organizationId }),
//   },
// })

// For filtering to claims from the user's org and claims with no org
@ApplyAccessControlList<
  unknown,
  AuthorizationContext & { user: { organizationId: string } }
>({
  LoggedInUser: {
    read: ({ user }) => ({
      $or: [{ organization: user.organizationId }, { organization: null }],
    }),
  },
})
@Entity<Claim>("Claim", {
  provider: new MikroBackendProvider(OrmClaim, connection),
})
export class Claim {
  @Field(() => ID, { nullable: true, primaryKeyField: true })
  id?: string;

  @Field(() => String, { adminUIOptions: { summaryField: true } })
  name!: string;

  @Field(() => String, { nullable: true })
  createdAt?: string;

  @Field(() => String, { nullable: true })
  updatedAt?: string;

  @Field(() => Number, { nullable: true })
  deleted = 0;

  @Field(() => String, { nullable: true })
  type?: string;

  @Field(() => String, { nullable: true })
  level?: string;

  @RelationshipField<Claim>(() => Organization, {
    id: (entity) => entity.organization?.id,
    nullable: true,
  })
  organization?: Organization;
}
