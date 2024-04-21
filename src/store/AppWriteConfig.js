import { Client, Account, Databases} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6624a9d1e3a5e71ddf08'); // Replace with your project ID

    export const account = new Account(client);
    export const databases = new Databases(client);
