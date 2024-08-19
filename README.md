# RLS Claims Reproduction Graphweaver Project

## Purpose

This project attempts to replicate an ACL issue with filtering data by logged in user's organisation.

There are 3 claims in the database, but the user is only allowed to access 1 or 2 of these depending on which ACL is uncommented.

## To Run

1. Clone
2. `pnpm i`
3. `pnpm start`

It uses an SQLite database in the root folder called `database.sqlite`.

## To Log In

This example uses fake magic link auth for simplicity. Use `kevin.brown@exogee.com` as your username. A link will print to the console. Copy and paste this into the browser to log in.

## NOTE

The generated keys in `.env` are now well known keys. DO NOT USE THESE outside of this example project. Use the graphweaver CLI to generate your own as per: https://docs.graphweaver.com/adding-magic-link-authentication
