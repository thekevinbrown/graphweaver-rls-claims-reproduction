import Graphweaver from "@exogee/graphweaver-server";

import "./schema";
import {
  MagicLink,
  MagicLinkData,
  setAddUserToContext,
  UserProfile,
} from "@exogee/graphweaver-auth";
import { MikroBackendProvider } from "@exogee/graphweaver-mikroorm";
import { Authentication } from "./entities";
import { connection } from "./database";

export const addUserToContext = async (userId: string) => {
  return {
    id: userId,
    email: "kevin.brown@exogee.com",
    organizationId: "org_45LMyqGlSlsVOgHQ",
    roles: ["LoggedInUser"],
  };
};

setAddUserToContext(addUserToContext);

export const magicLink = new MagicLink({
  provider: new MikroBackendProvider(Authentication<MagicLinkData>, connection),
  getUser: async (username): Promise<UserProfile<string>> => {
    if (username !== "kevin.brown@exogee.com")
      throw new Error("User not found");

    return addUserToContext("1");
  },
  sendMagicLink: async (url: URL): Promise<boolean> => {
    // In a production system this would email / sms the magic link and you would not log to the console!
    console.log(`\n\n ######## MagicLink: ${url.toString()} ######## \n\n`);
    return true;
  },
});

export const graphweaver = new Graphweaver();
export const handler = graphweaver.handler();
