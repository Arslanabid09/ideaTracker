import { Account,Databases,Client } from "appwrite";


const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("66c637e7001d95ad3d40")
export  const account = new Account(client);
export  const databases = new Databases(client);