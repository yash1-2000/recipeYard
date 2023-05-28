import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("http://localhost/v1")
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);

//Database

// export const databases = new Databases(client, "62cb05e74e74f14aaea6")