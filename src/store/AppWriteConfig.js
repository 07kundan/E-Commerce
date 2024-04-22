import { Client, Account, Databases} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6624a9d1e3a5e71ddf08'); 

    export const account = new Account(client);
    export const databases = new Databases(client,"6624cfd4357d94effa79");
