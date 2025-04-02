import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";

const prefix = "Bo";
generateKeypairWithPrefix(prefix);

function generateKeypairWithPrefix(prefix: string) {
    while (true) {
        const keypair = Keypair.generate();
        const privateKeyBase58 = bs58.encode(keypair.secretKey);
        
        if (privateKeyBase58.startsWith(prefix)) {
            console.log("Public Key:", keypair.publicKey.toBase58());
            console.log("Private Key (Base58):", privateKeyBase58);
            return keypair;
        }
    }
}